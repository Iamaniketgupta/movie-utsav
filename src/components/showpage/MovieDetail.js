import React from 'react'
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { HiMiniLanguage } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
import Image from 'next/image';


const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<IoIosStar key={`filled-${i}`} className="text-red45" />);
    }

    if (halfStar) {
        stars.push(<IoStarHalfOutline key="half" className="text-red45" />);
    }

    for (let i = 0; i < emptyStars; i++) {
        stars.push(<CiStar key={`empty-${i}`} className="text-gray-400" />);
    }

    return stars;
};

export default function MovieDetail({ movieData }) {
    return (
        <div className="rounded-lg text-gray60 border-[1px] text-sm border-black15 p-8">
            <div className=' my-3'>

                <h3 className='flex items-center gap-2 mb-2' >
                    <HiOutlineCalendarDateRange />   Releaseed Year
                </h3>

                <p className='text-white'>{movieData?.release_date?.split("-")[0]}</p>
            </div>

            <div className=' my-3'>
                <h3 className='flex items-center gap-2 mb-2' >
                    <HiMiniLanguage />   Available Languages
                </h3>

                <div className='flex items-center gap-2 flex-wrap text-white'>

                    {
                        movieData?.spoken_languages?.map((item) => {
                            return <div key={item.name} className='py-1 px-3 bg-black06 w-fit h-fit rounded-lg border-[1px] border-black15'>
                                {item.name}
                            </div>
                        })
                    }
                </div>

            </div>

            <div className='mt-3'>
                <h3 className='flex items-center gap-2 mb-2' >
                    <CiStar /> Ratings
                </h3>
                <div className='px-3 flex-1 py-3 h-20 min-w-24 max-w-40  bg-black06 rounded-lg border-[1px] border-black15'>
                    <p className='text-white'>IMBD</p>

                    {/* stars */}
                    <div className="flex items-center gap-1 text-xl">
                        {renderStars(movieData?.vote_average)}
                    </div>

                    {movieData?.vote_average || 0}
                </div>

            </div>


            <div className='mt-3'>
                <h3 className='flex items-center gap-2 mb-2' >
                    <CiGrid41 /> Geners
                </h3>

                <div className='flex items-center gap-2 flex-wrap text-white'>

                    {
                        movieData?.genres?.map((item) => {
                            return <div key={item.id} className='py-1 px-3 bg-black06  rounded-lg border-[1px] border-black15'>
                                {item.name}
                            </div>
                        })
                    }

                </div>
            </div>


            <div className='mt-4'>
                <h3 className='mb-2' >
                    Director
                </h3>
                <div className='bg-black06 p-2 rounded-md flex items-center gap-3'>
                    <Image
                        width={20}
                        alt='Director'
                        // layout='fill'
                        height={20}
                        loading='lazy'
                        src={"https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuYWdpbmclMjBkaXJlY3RvcnxlbnwwfHwwfHx8MA%3D%3D"}
                        className='w-14 h-14 rounded-lg bg-cover'>

                    </Image>
                    <div>
                        <p className='text-md text-white'>Rishab Shetty</p>
                        <p>From India</p>
                    </div>
                </div>
            </div>

            <div className='mt-4'>

                <h3 className='mb-2' >
                    Music
                </h3>
                <div className='bg-black06 p-2 rounded-md flex items-center gap-3'>
                    <Image
                        width={20}
                        alt='Director'
                        // layout='fill'
                        height={20}
                        loading='lazy'
                        src={"https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuYWdpbmclMjBkaXJlY3RvcnxlbnwwfHwwfHx8MA%3D%3D"}
                        className='w-14 h-14 rounded-lg bg-cover' />

                        <div>
                            <p className='text-md text-white'>Aniket Gupta</p>
                            <p>From India</p>
                        </div>
                </div>
            </div>



        </div>
    )
}

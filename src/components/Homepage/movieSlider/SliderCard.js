import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoArrowForward } from "react-icons/io5";

export default function SliderCard({ data }) {

  // console.log(`${process.env.NEXT_PUBLIC_IMG_URL}${data?.poster_path}`)
  return (
    <div className='p-4 md:p-[30px]  border-[1px] border-black15 rounded-xl backdrop-blur-xl bg-black10'>
      {/* Image container with inner shadow */}
      <div className='relative w-full h-40 md:h-52 rounded-lg overflow-hidden'>
        <Image
          layout='fill'
          className='rounded-md'
          alt={data.title}
          objectFit='cover'
          src={`${process.env.NEXT_PUBLIC_IMG_URL}${data?.poster_path}`}
          quality={100}
        />
      </div>

      {/* Title */}
      <div className='flex items-center sticky z-10 w-full text-xs md:text-sm
       shadow-[0px_-10px_15px_#1A1A1A]
       text-white justify-between backdrop-blur-xl bg-transparent'>
        <h3>
          {data?.title?.slice(0, 18)}
          {data?.title?.length > 17 && <span>..</span>}
        </h3>


        <Link href={`/show/${data.id}`}><IoArrowForward size={24} className='text-white ' /></Link>
      </div>
    </div >
  )
}

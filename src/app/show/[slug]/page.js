import CastCrousal from "@/components/showpage/CastCrousal";
import Hero from "@/components/showpage/Hero";
import MovieDetail from "@/components/showpage/MovieDetail";
import ReviewCrousal from "@/components/showpage/ReviewCrousal";
import axios from "axios";

export default async function Page({ params }) {
    const slug = params.slug;
    let movieData = null;
    let error = null;

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${slug}`, {
            headers : {
                "accept": "application/json",
                "Authorization": `"Bearer ${TOKEN}"`
            }
        });
        movieData = response.data;
    } catch (err) {
        console.error("Error fetching movie data:", err);
        error = "Failed to load movie details. Please try again later.";
    }


    return (
        <div className="bg-black03 text-white ">

            {error ? (
                <div className="p-10 text-center h-screen flex items-center justify-center text-red-500 text-lg">{error}</div>
            ) : (

                <>
                    <Hero movieData={movieData} />

                    {/* Content Container */}
                    <div className="p-5 md:p-10 lg:p-20 w-full flex flex-col items-center">
                        {/* Content Start */}
                        <div className="flex flex-col lg:flex-row gap-6 justify-center max-w-6xl w-full">

                            {/* Left Content - Description, Cast, Reviews */}
                            <div className="flex-1 w-full">
                                {/* Description */}
                                <div className="rounded-lg text-sm bg-black10 text-white border border-black15 p-6 md:p-10">
                                    <h3 className="text-gray60 mb-2">Description</h3>
                                    <p className="text-sm">{movieData?.overview}</p>
                                </div>

                                {/* Cast Crousal */}
                                <div className="mt-5 bg-black10 rounded-lg text-sm text-white border border-black15 p-6 md:p-10">
                                    <CastCrousal cast={movieData?.credits?.cast} />
                                </div>

                                {/* Reviews Crousal */}
                                <div className="mt-5 bg-black10 rounded-lg text-sm text-white border border-black15 p-6 md:p-10">
                                    <ReviewCrousal reviews={movieData?.reviews?.results} />
                                </div>
                            </div>

                            {/* Right Content - Movie Details */}
                            <div className="w-full lg:w-1/3">
                                <MovieDetail movieData={movieData} />
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </div>
    );
}

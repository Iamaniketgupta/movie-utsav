"use client";
import Hero from "@/components/Homepage/Hero";
import ListSlider from "@/components/Homepage/movieSlider/ListSlider";
import { getPopularMovies, getTopRatedMovies, getNowPlayingMovies, getUpComingMovies } from "@/data/movie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoading, setError, setMoviesData } from "../../lib/slices/movie";
import Loader from "../Loader";
import FeedBack from "../FeedBack";

export default function Home() {
  const dispatch = useDispatch();
  const { popular, toprated, latest, upcoming, loading, error } = useSelector((state) => state.movies);
  useEffect(() => {
    // if (typeof window === "undefined") return;
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));

        const [popularMovies, topRatedMovies, nowPlayingMovies, upComingMovies] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getNowPlayingMovies(),
          getUpComingMovies()
        ]);

        dispatch(setMoviesData({ type: "popular", data: popularMovies }));
        dispatch(setMoviesData({ type: "toprated", data: topRatedMovies }));
        dispatch(setMoviesData({ type: "latest", data: nowPlayingMovies }));
        dispatch(setMoviesData({ type: "upcoming", data: upComingMovies }));
      } catch (err) {
        console.log(err)
        dispatch(setError("Failed to fetch movies"));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <main className="bg-black03 overflow-x-hidden">
      <Hero />
      {loading ? <div className="text-white flex items-center h-60 justify-center">
        <Loader /></div> :

        <div className="px-4 md:px-8 mt-20 lg:px-20 h-full">
          <div className="md:px-4 py-10 shadow-10">
            {error ? <p className="text-red-500">{error}</p> : null}

            <section id="geners" className="mb-10">
              <ListSlider title="Our Genres" data={popular} />
            </section>

            <section id="upcoming" className="mb-10">
              <ListSlider title="Upcoming Bangers" data={upcoming} />
            </section>


            <section id="latest" className="mb-10">
              <ListSlider title="Latest on Utsav" data={latest} />
            </section>

            <section id="toprated" className="mb-10">
              <ListSlider title="Top Rated" data={toprated} />
            </section>

            <section id="popular" className="mb-10">
              <ListSlider title="Popular" data={popular} />
            </section>

          </div>
        </div>
      }

      <FeedBack></FeedBack>
    </main>
  );
}

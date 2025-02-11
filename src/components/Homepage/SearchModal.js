"use client";
import { searchMovies } from "@/data/movie";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import SliderCard from "./movieSlider/SliderCard";
import Link from "next/link";

const SearchModal = ({ isOpen, onClose }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    const result = await searchMovies(query);
    setMovies(result);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
      <div className="bg-black10 text-white w-full min-h-full h-ato p-6 rounded-lg shadow-lg transition-all flex flex-col gap-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Search</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-red-600 transition">
            <IoClose className="text-xl" />
          </button>
        </div>

        {/* Search Input & Button */}
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className="flex-1 p-2 bg-black12 text-white border border-black15 rounded-md outline-none"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-red45 text-white rounded-md text-sm hover:bg-red-600 transition"
          >
            Search
          </button>
        </div>

        {/* Searched Movies Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 overflow-y-auto max-h-[70vh]">
          {movies.length === 0 ? (
            <div o className="col-span-full text-center text-gray-400 text-sm">No Movies Found</div>
          ) : (
            movies.map((item) =>
              <div key={item.id}>
                <Link onClick={onClose}
                  href={`/show/${item.id}`}><SliderCard data={item} /></Link>
              </div>)
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

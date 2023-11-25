'use client'

import { getPopularMovies } from "@/lib/data";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

let page = 2

const LoadMore = () => {
  const [ref, inView] = useInView();
  const [data, setData] = useState<Movie[]>([])

  useEffect(() => {
    if(inView) {
      getPopularMovies(page)
      .then(res => {
        console.log(res);
        setData([...data, ...res.results])
        page++
      })
    }
  }, [inView, data])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto py-4">
        {data.map((movie) => (
          <AnimeCard
            key={movie.id}
            id={movie.id}
            src={movie.poster_path}
          />
        ))}
      </div>

      <div ref={ref} className="h-10 bg-blue-500">
        Loading....
      </div>
    </>

  )
}

export default LoadMore

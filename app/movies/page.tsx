import { getPopularMovies, getTopRatedMovies } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

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

const MoviesPage = async () => {
  const movies = await getTopRatedMovies()
  
  if (!movies) {
    return null
  }
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto py-4">
      {movies.results.map((movie: Movie) => (
        <Link
          scroll={false}
          key={movie.id}
          href={`/movies/${movie.id}`}
        >
        <Image 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          width={500}
          height={1000}
        />
        </Link>
      ))}
    </div>
  )
}

export default MoviesPage

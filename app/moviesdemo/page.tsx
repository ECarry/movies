import { getPopularMovies } from "@/actions/action";
import LoadMore from "@/components/LoadMore";

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
  const movies = await getPopularMovies(1)
  
  if (!movies) {
    return null
  }
  
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto py-4">
        {movies}
      </div>
      <LoadMore />
    </>

  )
}

export default MoviesPage

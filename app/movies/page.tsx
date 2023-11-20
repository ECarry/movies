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
  const apiKey = process.env.NEXT_TMDB_API_KEY
  const apiUrl = 'https://api.themoviedb.org/3/movie/popular';

  // 构建请求URL
  const requestUrl = `${apiUrl}?api_key=${apiKey}&language=zh`;
  const data = await fetch(requestUrl, {
    method: 'GET'
  })

  const movies = await data.json()

  if (!movies) {
    return null
  }

  //console.log('===========>', movies);
  
  return (
    <div className="grid grid-cols-4 gap-4 container mx-auto">
      {movies.results.map((movie: Movie) => (
        <Link
          key={movie.id}
          href=''
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

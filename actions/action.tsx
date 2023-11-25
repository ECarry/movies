'use server'

import AnimeCard from "@/components/AnimeCard";

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

const apiKey = process.env.NEXT_TMDB_API_KEY
const language = 'zh'

export async function getPopularMovies(page: number) {
  const apiUrl = 'https://api.themoviedb.org/3/movie/popular';

  const requestUrl = `${apiUrl}?api_key=${apiKey}&language=${language}&page=${page}`;
  try {
    const res = await fetch(requestUrl, {
      method: 'GET'
    })
  
    const data = await res.json()

    return data.results.map((movie: Movie, index: number) => (
      <AnimeCard
        key={movie.id}
        id={movie.id}
        src={movie.poster_path}
        index={index}
      />
    ))
  } catch (error) {
    console.log(error);
    
  }
}

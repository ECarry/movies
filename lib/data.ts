import { SearchResults } from '@/types';
import 'server-only'

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

    return data
  } catch (error) {
    console.log(error);
    
  }
}

export async function getTopRatedMovies(page: number) {
  const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated';

  const requestUrl = `${apiUrl}?api_key=${apiKey}&language=${language}&page=${page}`;
  try {
    const res = await fetch(requestUrl, {
      method: 'GET'
    })
  
    const data = await res.json()

    return data
  } catch (error) {
    console.log(error);
    
  }
}

export async function getMovieInfoById(id: string) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${id}`

  const requestUrl = `${apiUrl}?api_key=${apiKey}&language=${language}`;
  try {
    const res = await fetch(requestUrl, {
      method: 'GET'
    })
  
    const data = await res.json()

    return data
  } catch (error) {
    console.log(error);
    
  }
}

export async function getNowPlayingMovies(page: number) {
  const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing';

  const requestUrl = `${apiUrl}?api_key=${apiKey}&language=${language}&page=${page}`;
  try {
    const res = await fetch(requestUrl, {
      method: 'GET'
    })
  
    const data = await res.json()

    return data
  } catch (error) {
    console.log(error);
    
  }
}

export async function getUpcomingMovies(page: number) {
  const apiUrl = 'https://api.themoviedb.org/3/movie/upcoming';

  const requestUrl = `${apiUrl}?api_key=${apiKey}&language=${language}&page=${page}`;
  try {
    const res = await fetch(requestUrl, {
      method: 'GET'
    })
  
    const data = await res.json()

    return data
  } catch (error) {
    console.log(error);
    
  }
}

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set('language', 'en-US')
  url.searchParams.set('page', '1')
  url.searchParams.set('sort_by', 'popularity.desc')

  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24 // 24 hours default
    }
  }

  const res = await fetch(url.toString(), options)
  const data = (await res.json()) as SearchResults

  return data
}

export async function getUpcomingMoviesDemo() {
  const url = new URL('https://api.themoviedb.org/3/movie/upcoming')
  const data = await fetchFromTMDB(url)

  return data.results
}

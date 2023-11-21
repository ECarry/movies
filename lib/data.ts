const apiKey = process.env.NEXT_TMDB_API_KEY
const language = 'zh'

export async function getPopularMovies() {
  const apiUrl = 'https://api.themoviedb.org/3/movie/popular';

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

export async function getTopRatedMovies() {
  const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated';

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

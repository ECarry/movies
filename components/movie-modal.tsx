import { getMovieInfoById } from "@/lib/data";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MovieModal = async ({
  id
}: {
  id: string
}) => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  const movie = await getMovieInfoById(id)

  console.log(movie);
  
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500/75 pr-6 pl-2 md:pr-0 md:pl-0">
      <div className="flex items-center justify-center h-full w-full">
        <div className="bg-white w-full md:w-1/2 h-8/10 rounded-xl overflow-hidden">
          <div className="h-1/2 w-full relative">
            <Image 
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
              alt={movie.title} 
              width={1920} 
              height={1080} 
              className="object-cover w-full h-full" 
            />
            
            <Link href={'/movies'} scroll={false} className="absolute right-4 top-4">
              <X className="text-white w-4 h-4" />
            </Link>
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-semibold mb-1">{movie.title}</h1>
            <h2 className="text-gray-500 mb-4">{movie.release_date} {movie.runtime}min</h2>
            <p className="text-sm md:text-lg">{movie.overview}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieModal

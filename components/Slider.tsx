import { Movie } from "@/types"
import Image from "next/image"

interface SliderProps {
  data: Movie[]
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

const Slider = ({
  data
}: SliderProps) => {

  return (
    <div className="flex overflow-x-auto w-full px-16 py-4 gap-4 scrollbar-hide">
      {data.map(movie => (
        <div key={movie.id} 
          className="
            flex-none 
            cursor-pointer 
            min-w-full 
            min-h-[25vw] 
            relative 
            overflow-hidden
            shadow-xl
            ">
          <Image 
            src={`${IMAGE_BASE_URL}/${movie.backdrop_path}`}
            alt="backdrop"
            fill
            className="w-full h-full object-cover absolute rounded-md object-left-top"
          />
          <div
            className="
              after:rounded-lg
              after:absolute
              after:inset-0
              after:hover:border-[4px]
              after:hover:border-gray-300/75
              after:transition-all
              after:duration-150
            "
          >

          </div>
        </div>
      ))}
    </div>
  )
}

export default Slider

import { getMovieInfoById } from "@/lib/data"
import Image from "next/image"

import Level12 from '@/public/12.png'
import Level18 from '@/public/18.png'
import CC from '@/public/cc.png'
import Audio from '@/public/audio.png'
import { Plus } from "lucide-react"

interface MovieIdPageProps {
  params: {
    id: string
  }
}

type Genre = {
  id: number;
  name: string;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

const MovieIdPage = async ({
  params
}: MovieIdPageProps) => {
  const { id } = params

  const data = await getMovieInfoById(id)

  console.log(data);
  

  return (
    <main className="flex flex-col justify-center min-h-screen px-16">
      {/* BACKDROP  */}
      <div className="fixed left-0 top-0 right-0 transition-all duration-200 ease">
        <Image 
          src={IMAGE_BASE_URL+data.backdrop_path}
          alt="backdrop"
          width={1280}
          height={720}
          priority
          className="z-0 object-cover w-full h-full"
        />
        <div
          style={{
            'backgroundImage': 'radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41))'
          }}
          className="
            absolute
            inset-0
        ">

        </div>
      </div>

      <div className="flex flex-col z-10 gap-8">
        {/* TITLE  */}
        <div>
          <h1 className="text-4xl text-white font-mono">{data.title}</h1>
        </div>
        
        {/* GENRES  */}
        <div className="flex flex-col gap-1">

          <div>
            <div className="flex items-center gap-2">
              <Image src={data.adult === false ? Level12 : Level18} alt="12+" height={20} className=""/>
              <Image src={Audio} alt="ad" height={20} className=""/>
              <Image src={CC} alt="cc" height={20} className=""/>
              <span className="text-sm text-white font-light">{data.release_date.slice(0,4)} • {data.runtime}分钟</span>
            </div>
          </div>
          <div className="flex gap-2 text-sm font-light">
            {data.genres.map((genre: Genre) => (
              <p key={genre.id} className="text-white">
                {genre.name}
              </p>
            ))}
          </div>
        </div>

        {/* PLAY BUTTON  */}
        <div>
          <div 
            className="
              w-10 
              h-10 
              rounded-full 
              border-2 
              flex 
              items-center 
              justify-center 
              cursor-pointer
              bg-black
              transition-all
              duration-150
              ease-in-out
              hover:bg-white
            ">
            <Plus className="text-white hover:text-black" />
          </div>
        </div>

        {/* DESC  */}
        <div className="md:max-w-[50vw]">
          <p className="text-white text-sm font-light">{data.overview}</p>
        </div>
      </div>
      
    </main>
  )
}

export default MovieIdPage

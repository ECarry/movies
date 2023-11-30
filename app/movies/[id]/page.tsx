import { getMovieInfoById } from "@/lib/data"
import Image from "next/image"

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
          width={1920}
          height={1080}
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
          <div className="text-white text-sm font-light">
            <span>{data.release_date.slice(0,4)} • {data.runtime}分钟</span>
          </div>
          <div className="flex gap-2 text-sm font-light">
            {data.genres.map((genre: Genre) => (
              <p key={genre.id} className="text-white">
                {genre.name}
              </p>
            ))}
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

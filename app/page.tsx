import { getNowPlayingMovies, getPopularMovies, getUpcomingMovies } from "@/lib/data";

import BrandCard from "@/components/BrandCard";
import Slider from "@/components/Slider";
import SliderList from "@/components/SliderList";

export default async function Home() {
  const popularMovies = await getPopularMovies(1)

  const nowPlayingMovies = await getNowPlayingMovies(1)

  const upcomingMovies = await getUpcomingMovies(1)

  return (
    <main className="mt-[72px] py-4 flex flex-col gap-6">
      <Slider data={popularMovies.results} />
      
      {/* BRAND CARD  */}
      <div className="w-full px-16 grid grid-cols-12 gap-4 md:gap-5 lg:gap-6">
        <div className="col-span-4 md:col-span-2">
        <BrandCard title="Disney" />
        </div>

        <div className="col-span-4 md:col-span-2">
        <BrandCard title="Pixar" />
        </div>

        <div className="col-span-4 md:col-span-2">
        <BrandCard title="Marvel" />
        </div>

        <div className="col-span-4 md:col-span-2">
        <BrandCard title="StarWars" />
        </div>

        <div className="col-span-4 md:col-span-2">
        <BrandCard title="NationalGeographic" />
        </div>

        <div className="col-span-4 md:col-span-2">
        <BrandCard title="Star" />
        </div>
      </div>

      <div className="w-full px-[52px]">
        <SliderList title="熱門電影" data={popularMovies.results} />
      </div>

      <div className="w-full px-[52px]">
        <SliderList title="現正熱映" data={nowPlayingMovies.results} />
      </div>

      <div className="w-full px-[52px]">
        <SliderList title="即將上映" data={upcomingMovies.results} />
      </div>
      
    </main>
  )
}

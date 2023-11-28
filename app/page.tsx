import { getPopularMovies } from "@/lib/data";

import ProductionCard from "@/components/ProductionCard";
import Slider from "@/components/Slider";

export default async function Home() {
  const popularMovies = await getPopularMovies(1)

  return (
    <main className="mt-[72px] py-4 flex flex-col gap-4">
      <Slider data={popularMovies.results} />

      <div className="flex items-center w-full gap-2 md:gap-5 px-16 justify-between">
        <ProductionCard title="Disney" />
        <ProductionCard title="Pixar" />
        <ProductionCard title="Marvel" />
        <ProductionCard title="StarWars" />
        <ProductionCard title="NationalGeographic" />
      </div>
    </main>
  )
}

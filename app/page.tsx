import Header from "@/components/Header";
import Slider from "@/components/Slider";
import { getPopularMovies } from "@/lib/data";

export default async function Home() {
  const popularMovies = await getPopularMovies(1)

  return (
    <main className="mt-[72px] py-4">
      <Slider data={popularMovies.results} />
    </main>
  )
}

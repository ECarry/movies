import MovieModal from "@/components/movie-modal"
import { MovieSkeleton } from "@/components/skeleton"
import { Suspense } from "react"

interface MovieIdPageProps {
  params: {
    id: string
  }
}

const MovieIdPage = async ({ params }: MovieIdPageProps) => {
  const { id } = params

  return (
    <Suspense fallback={<MovieSkeleton />} >
      <MovieModal id={id} />
    </Suspense>
  )
}

export default MovieIdPage

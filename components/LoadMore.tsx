'use client'

import { getPopularMovies } from "@/actions/action";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Movie = JSX.Element

let page = 2

const LoadMore = () => {
  const [ref, inView] = useInView();
  const [data, setData] = useState<Movie[]>([])

  useEffect(() => {
    if(inView) {
      getPopularMovies(page)
      .then(res => {
        console.log(res);
        setData([...data, ...res])
        page++
      })
    }
  }, [inView, data])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto py-4">
        {data}
      </div>

      <div ref={ref} className="h-10 bg-blue-500">
        Loading....
      </div>
    </>

  )
}

export default LoadMore

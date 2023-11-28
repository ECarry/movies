'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Movie } from "@/types"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SliderProps {
  data: Movie[]
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

const Slider = ({
  data
}: SliderProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // 在挂载时获取窗口宽度
    setScreenWidth(window.innerWidth);

    // 添加事件监听器，监听窗口大小变化
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 清除监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 依赖项为空数组，确保只在挂载时执行一次

  const sliderLeft = (e: HTMLDivElement) => {
    e.scrollLeft-=screenWidth-112
  }

  const sliderRight = (e: HTMLDivElement) => {
    e.scrollLeft+=screenWidth-112
  }

  return (
    <div className="relative">
      <div ref={ref} className="flex overflow-x-auto w-full px-16 py-4 gap-4 scrollbar-hide scroll-smooth">
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
              className="w-full h-full object-cover absolute rounded-md object-left-top brightness-75"
              sizes="calc(100vw - 128px)"
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
      <div onClick={() => sliderLeft(ref.current!)} className="absolute top-0 left-0 h-full w-[48px] cursor-pointer flex items-center justify-center  group">
        <ChevronLeft className="w-8 h-8 md:w-[48px] md:h-[48px] text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
      </div>
      <div onClick={() => sliderRight(ref.current!)} className="absolute top-0 right-0 h-full w-[48px] cursor-pointer flex items-center group">
        <ChevronRight className="w-8 h-8 md:w-[48px] md:h-[48px] text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
      </div>
    </div>
  )
}

export default Slider

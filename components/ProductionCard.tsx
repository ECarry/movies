import Image from 'next/image'

import Disney from '@/public/disney.png'
import Pixar from '@/public/pixar.png'
import Marvel from '@/public/marvel.png'
import StarWars from '@/public/star-wars.png'
import NationalGeographic from '@/public/national-geographic.png'

interface ProductionCardProps {
  title: 'Disney' | 'Pixar' | 'Marvel' | 'StarWars' | 'NationalGeographic';
}

const typeMap: any = {
  'Disney': {
    image: Disney,
    video: '/disney.mp4'
  },
  'Pixar': {
    image: Pixar,
    video: '/pixar.mp4'
  },
  'Marvel': {
    image: Marvel,
    video: '/marvel.mp4'
  },
  'StarWars': {
    image: StarWars,
    video: '/star-wars.mp4'
  },
  'NationalGeographic': {
    image: NationalGeographic,
    video: '/national-geographic.mp4'
  },
}

const ProductionCard = ({
  title
}: ProductionCardProps) => {
  return (
    <>
      <div className='hover:scale-110 transition-all duration-300 ease-in-out relative w-full h-auto rounded-lg overflow-hidden cursor-pointer'>
        <Image src={typeMap[title].image} alt='' fill className='w-full h-full object-cover' sizes="(min-width: 780px) calc(19.73vw - 40px), calc(20vw - 32px)" />
        <video src={typeMap[title].video} autoPlay loop className='w-full h-full' />
        <div 
          className='
            after:rounded-lg
            after:absolute
            after:inset-0
            after:hover:md:border-[4px]
            after:hover:border-[2px]
            after:hover:border-gray-300/75
            after:transition-all
            after:duration-150'></div>
      </div>
      
    </>
  )
}

export default ProductionCard

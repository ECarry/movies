import Link from 'next/link'
import Image from "next/image";
import { MotionDiv } from './MotionDiv';

interface AnimeCardProps {
  id: number;
  src: string;
  index: number;
}

const variants= {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const AnimeCard = ({
  id,
  src,
  index
}: AnimeCardProps) => {
  return (
    <MotionDiv
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: index * 0.25,
        ease: 'easeInOut',
        duration: 0.5
      }}
      viewport={{ amount: 0 }}
      className='overflow-hidden'>
      <Link
          scroll={false}
          key={id}
          href={`/movies/${id}`}
        >
        <Image 
          src={`https://image.tmdb.org/t/p/w500${src}`}
          alt=""
          width={500}
          height={1000}
          className='w-full h-full object-cover hover:scale-105 duration-150'
        />
        </Link>
    </MotionDiv>
  )
}

export default AnimeCard

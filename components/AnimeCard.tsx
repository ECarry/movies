import Link from 'next/link'
import Image from "next/image";

interface AnimeCardProps {
  id: number;
  src: string;
}

const AnimeCard = ({
  id,
  src
}: AnimeCardProps) => {
  return (
    <div>
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
        />
        </Link>
    </div>
  )
}

export default AnimeCard

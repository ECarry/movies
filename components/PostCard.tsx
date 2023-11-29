import { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  data: Movie;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

const PostCard = ({
  data
}: PostCardProps) => {
  return (
    <Link 
      href='/'  
      style={{
        'boxShadow': 'rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px'
      }}
      className="flex-none w-[200px] h-[300px] rounded-md hover:scale-105 transition duration-300 ease-in-out relative"
      >
      <Image 
        src={`${IMAGE_BASE_URL}/${data.poster_path}`}
        alt="post"
        width={200}
        height={300}
        className="object-cover w-full h-full "
      />
      <div className="after:absolute after:inset-0 after:hover:border-[3px] after:rounded-md"></div>
        
      </Link>
  )
}

export default PostCard

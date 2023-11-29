import { Movie } from "@/types";
import PostCard from "./PostCard";

interface SliderListProps {
  title: string;
  data: Movie[]
}

const SliderList = ({
  title,
  data
}: SliderListProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-white px-3">{title}</h1>
      </div>

      <div className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth py-5 px-3">
        {data.map((item, index) => (
          <PostCard key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default SliderList

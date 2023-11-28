import { cn } from "@/lib/utils";
import { Film, Home, Plus, Search, Star, Tv } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  route: {
    title: string;
    icon: string;
    link: string;
    hidden: boolean;
  }
}

const iconMap: Record<string, JSX.Element> = {
  'home': <Home size={16} />,
  'search': <Search size={16} />,
  'watchList': <Plus size={16} />,
  'origin': <Star size={16} />,
  'movie': <Film size={16} />,
  'tv': <Tv size={16} />
}

const NavItem = ({
  route
}: NavItemProps) => {

  return (
    <Link href={route.link} className={cn(route.hidden === true ? 'hidden md:block': '')}>
      <div className="flex items-center gap-2">
        {iconMap[route.icon]}
        <p 
          className="
            text-sm
            hidden
            md:block 
            font-semibold 
            relative
            after:absolute
            after:bottom-[-6px]
            after:left-0
            after:h-[2px]
            after:transition
            after:ease-linear
            after:duration-250
            after:bg-white
            after:rounded-bl-sm
            after:rounded-br-sm
            after:hover:w-full
          ">
          {route.title}
        </p>
      </div>
    </Link>
  )
}

export default NavItem

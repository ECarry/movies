import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { X } from "lucide-react";

export function MovieSkeleton () {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-500/75 pr-6 pl-2 md:pr-0 md:pl-0">
      <div className="flex items-center justify-center h-full w-full">
        <div className="bg-white w-full md:w-1/2 h-8/10 rounded-xl overflow-hidden">
          <div className="h-1/2 w-full relative">
            <Skeleton className="w-full h-[400px]" />
            <Link href={'/movies'} className="absolute right-4 top-4">
              <X className="text-black w-4 h-4" />
            </Link>
          </div>
          <div className="p-4 space-y-4">
            <Skeleton className="h-8 w-[160px]" />
            <Skeleton className="h-4 w-[80px]" />
            <Skeleton className="h-4 w-full " />
            <Skeleton className="h-4 w-full " />
            <Skeleton className="h-4 w-full " />
          </div>
        </div>

      </div>
    </div>
  )
}

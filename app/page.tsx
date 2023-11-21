import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Link href={'/movies'}>
        <span className="text-3xl">Movies</span>
      </Link>
    </main>
  )
}

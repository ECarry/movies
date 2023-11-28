import Link from "next/link"

const Logo = () => {
  return (
    <Link href='/'>
      <div className="max-w-[79px] h-[48px]">
        <div
          role="img"
          className="
            w-full
            h-full
            bg-logo
            bg-no-repeat
            bg-contain
            min-h-[38px]
            min-w-[63px]
        ">
        </div>
      </div>
    </Link>
  )
}

export default Logo

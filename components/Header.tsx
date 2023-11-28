import { MoreVertical } from 'lucide-react'
import Logo from './Logo'
import NavItem from './NavItem'
import Image from 'next/image'

const routes = [
  {
    title: '主页',
    icon: 'home',
    link: '/',
    hidden: false
  },
  {
    title: '搜索',
    icon: 'search',
    link: '/',
    hidden: false
  },
  {
    title: '观看列表',
    icon: 'watchList',
    link: '/',
    hidden: false
  },
  {
    title: '原创',
    icon: 'origin',
    link: '/',
    hidden: true
  },
  {
    title: '电影',
    icon: 'movie',
    link: '/',
    hidden: true
  },
  {
    title: '剧集',
    icon: 'tv',
    link: '/',
    hidden: true
  },
]

const Header = () => {
  return (
    <header className='fixed top-0 w-full z-10 text-white flex items-center h-[72px] px-6 justify-between'>
      <ul className='items-center gap-8 hidden md:flex'>
        <span className='mr-6'><Logo /></span>
        {routes.map(route => (
          <span key={route.link}>
            <NavItem route={route} />
          </span>
        ))}
        <span><MoreVertical size={16} className='text-white md:hidden'/></span>
      </ul>

      <ul className='flex items-center gap-8 md:hidden'>
        <span className='mr-6'><Logo /></span>
        {routes.map((route, index) => index<3 && (
          <span key={route.link}>
            <NavItem route={route} />
          </span>
        ))}
        <span><MoreVertical size={16} className='text-white md:hidden'/></span>
      </ul>

      <div className='flex items-center gap-4 cursor-pointer'>
        <span className='hidden lg:block'>ECarry</span>
        <Image 
          width={48}
          height={48}
          src='/avatar.png'
          alt='avatar'
        />
      </div>
    </header>
  )
}

export default Header

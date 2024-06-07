import { useState } from 'react'

function Header() {
  const [menuState, setMenuState] = useState(false)

  return (
    <header className="header p-6 bg-white mx-auto relative">
      <nav className="flex flex-row justify-between items-center">
        {/* logo */}
        <div className="logo basis-1/6 flex items-center justify-center font-semibold text-xl cursor-pointer">
          ManStyle.
        </div>
        {/* Menu */}
        <ul className={`top-menu basis-4/6 ${menuState ? 'top-menu-expanded' : 'hidden'} lg:flex lg:gap-7 lg:flex-row lg:justify-center
        uppercase text-gray-500 font-semibold tracking-widest text-xs`}>
          <li className="top-menu-item">
            <a href="">Home</a>
          </li>
          <li className="top-menu-item">
            <a href="">Products</a>
          </li>
          <li className="top-menu-item">
            <a href="">Blog</a>
          </li>
          <li className="top-menu-item">
            <a href="">Contact</a>
          </li>
          <li className="top-menu-item">
            <a href="">About</a>
          </li>
        </ul>
        {/* Cart */}
        <div className="basis-3/6 lg:basis-1/6 flex flex-row lg:justify-center justify-end gap-1.5 cursor-pointer
        text-gray-500 hover:text-gray-900 hover:font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          Sign in
        </div>
        <div className="more-icon basis-1/6 flex-row float-start lg:hidden ml-1.5 sm:ml-0.5">
          <svg xmlns="http://www.w3.org/2000/svg"
            onClick={() => setMenuState(!menuState)}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>
    </header>
  )
}

export default Header

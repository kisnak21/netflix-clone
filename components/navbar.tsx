/* eslint-disable @next/next/no-img-element */
import Navbaritem from './navbaritem'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import MobileMenu from './mobilemenu'
import { useCallback, useEffect, useState } from 'react'
import AccountMenu from './accountmenu'

const TOP_OFFSET = 66

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false)
  const [showAccount, setshowAccount] = useState(false)
  const [showBackground, setshowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setshowBackground(true)
      } else {
        setshowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setShowMobile((current) => !current)
  }, [])

  const toggleShowAccount = useCallback(() => {
    setshowAccount((current) => !current)
  }, [])

  return (
    <nav className='fixed z-40 w-full'>
      <div
        className={`flex flex-row items-center  px-4 py-6 transition duration-500 md:px-16 ${
          showBackground ? 'bg-zinc-900 bg-opacity-90' : ''
        }`}
      >
        <img src='/images/logo.png' alt='logo' className='h-4 lg:h-7' />
        <div className='ml-8 hidden flex-row gap-7 lg:flex'>
          <Navbaritem label='Home' />
          <Navbaritem label='Series' />
          <Navbaritem label='Films' />
          <Navbaritem label='New & Popular' />
          <Navbaritem label='My List' />
          <Navbaritem label='Browse by languages' />
        </div>
        <div
          className='relative ml-8 flex cursor-pointer flex-row items-center gap-2 lg:hidden'
          onClick={toggleMobileMenu}
        >
          <p className='text-sm text-white'>Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobile ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <MobileMenu visible={showMobile} />
        </div>
        <div className='ml-auto flex flex-row items-center gap-7'>
          <div className='cursor-pointer text-gray-200 transition hover:text-gray-300'>
            <BsSearch />
          </div>
          <div className='cursor-pointer text-gray-200 transition hover:text-gray-300'>
            <BsBell />
          </div>

          <div
            onClick={() => toggleShowAccount()}
            className='relative flex cursor-pointer flex-row items-center gap-2'
          >
            <div className='h-6 w-6 overflow-hidden rounded-md lg:h-10 lg:w-10'>
              <img src='/images/default-red.png' alt='Profiles' />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccount ? 'rotate-180' : 'rotate-0'
              }`}
            />
            <AccountMenu visible={showAccount} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

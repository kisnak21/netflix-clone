/* eslint-disable @next/next/no-img-element */
import { signOut } from 'next-auth/react'
import React from 'react'

interface AccountMenuProps {
  visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null
  }
  return (
    <div className='absolute top-14 right-0 flex w-56 flex-col border-2 border-gray-800 bg-black py-5'>
      <div className='flex flex-col gap-3'>
        <div className='group/item flex w-full flex-row items-center gap-3 px-3'>
          <img
            src='/images/default-red.png'
            alt='profiles'
            className='w-8 rounded-md'
          />
          <p className='text-sm text-white group-hover:underline'>Username</p>
        </div>
        <hr className='my-4 h-px border-0 bg-gray-600' />
        <div
          onClick={() => signOut()}
          className='px-3 text-center text-sm text-white hover:underline'
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  )
}

export default AccountMenu

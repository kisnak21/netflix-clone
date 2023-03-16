/* eslint-disable @next/next/no-img-element */

import Input from '@/components/input'
import { useCallback, useState } from 'react'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    )
  }, [])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className='h-full w-full bg-black lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img src='/images/logo.png' alt='logo' className='h-12' />
        </nav>
        <div className='flex justify-center'>
          <div className='mt-2 w-full self-center rounded-md bg-black bg-opacity-70 px-16 py-16 lg:w-2/5 lg:max-w-md'>
            <h2 className='mb-8 text-4xl font-semibold text-white'>
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'register' && (
                <Input
                  label='Username'
                  onChange={(e: any) => setName(e.target.value)}
                  id='name'
                  value={name}
                />
              )}
              <Input
                label='Email'
                onChange={(e: any) => setEmail(e.target.value)}
                id='email'
                type='email'
                value={email}
              />
              <Input
                label='Password'
                onChange={(e: any) => setPassword(e.target.value)}
                id='password'
                type='password'
                value={password}
              />
            </div>
            <button className='mt-10 w-full rounded-md bg-red-600 py-3 text-white transition hover:bg-red-700'>
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <p className='mt-12 text-neutral-500'>
              {variant === 'login'
                ? 'First time using Netflix?'
                : 'Already have an account?'}
              <span
                onClick={toggleVariant}
                className='ml-1 cursor-pointer text-white hover:underline'
              >
                {variant === 'login'
                  ? 'Create an account'
                  : 'Log into your account'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth

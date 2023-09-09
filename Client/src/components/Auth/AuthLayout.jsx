import React from 'react'
import Logo from '../Logo'

function AuthLayout({children}) {
  return (
    <main className='w-full bg-inherit min-h-screen flex flex-col items-center justify-center gap-4 px-8'>
        <Logo/>
        {children}
    </main>
  )
}

export default AuthLayout
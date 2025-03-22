import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const Layout = ({children} : {children : ReactNode}) => {
  return (
    <main className='flex min-h-screen flex-1 flex-col'>
        <div className='mx-auto max-w-7xl'>
          <Header />
            <div className='mt-20 pb-20 justify-center'>
              {children}
            </div>
        </div>
    </main>
  )
}

export default Layout
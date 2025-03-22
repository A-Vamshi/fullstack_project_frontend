import React, { ReactNode } from 'react'

const Layout = ({children}:{children : ReactNode}) => {
  return (
    <main className='relative flex flex-col-reverse text-gray-300 sm:flex-row'>
        <section className='my-auto flex h-full min-h-screen flex-1 items-center bg-pattern bg-cover bg-top bg-black px-5 py-10'>
            <div className='gradient-vertical mx-auto flex max-w-xl flex-col gap-6 rounded-lg p-10'>
                <div className='flex flex-row gap-3'>
                    <h1 className='text-white text-3xl font-extrabold'>GitGud</h1>
                    {/* add logo or other text */}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </section>
        <section className='sticky h-40 w-full sm:top-0 sm:h-screen sm:flex-1'>
            {/* Any cover images */}
        </section>
    </main>
  )
}

export default Layout
"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
  const pathname = usePathname();
  return (
    <header className='my-10 flex justify-between gap-5'>
      <Link href="/">GitGud</Link>
      <ul className='flex flex-row gap-8 items-center'>
        <li>
          <Link href="/accounts" className={cn("text-base cursor-pointer capitalize", pathname === "/accounts" ? "text-gray-400" : "text-gray-500")}>Your Accounts</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
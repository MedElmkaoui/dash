'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export type FeedProps = {
    children: any,
}

function Feed({children}: FeedProps) {

  const pathname = usePathname()

  return (
    <div className={`${!pathname.includes('transactions')? 'mx-12 my-8 xl:grid-cols-4 xl:gap-8 2xl:gap-8 md:gap-6' : 'mx-5 my-2 xl:grid-cols-3 gap-y-5'} grid grid-cols-1 gap-4 md:grid-cols-2  `}> 
        {children}
    </div>
  )
}

export default Feed
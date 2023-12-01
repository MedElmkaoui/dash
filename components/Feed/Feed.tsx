'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export type FeedProps = {
    children: any,
}

function Feed({children}: FeedProps) {

  const pathname = usePathname()

  return (
    <div className={`mx-15 my-2 xl:grid-cols-4 gap-y-5 grid grid-cols-1 gap-4 md:grid-cols-2 `}> 
        {children}
    </div>
  )
}

export default Feed
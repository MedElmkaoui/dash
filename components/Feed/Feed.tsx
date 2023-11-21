import React, { Children } from 'react'

export type FeedProps = {
    children: any,
}

function Feed({children}: FeedProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 mx-12 my-8 2xl:gap-7.5"> 
        {children}
    </div>
  )
}

export default Feed
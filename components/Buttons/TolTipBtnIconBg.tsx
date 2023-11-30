'use client'

import Link from 'next/link'
import { useState } from 'react'

export type TolTipBtnIconProps= {
     children: React.ReactNode,
     href: string,
     label: string,
} 
function TolTipBtnIconBg({children, href, label}: TolTipBtnIconProps) {
    const [openTolTip, setOpenTolTip] = useState(false)

  return (
    <>
        <div className="relative">
            <div onMouseEnter={()=>{setOpenTolTip(true)}} 
                onMouseLeave={()=> setOpenTolTip(false)}
                className="flex text-black items-center justify-center rounded-md h-12 w-12 mx-8 bg-gray dark:bg-meta-4 dark:text-white"
            >
                <Link 
                      
                    href={href} 
                >
                    {children}
                </Link>
            </div>

            {openTolTip && (
                <div className="absolute text-sm  bg-gray whitespace-nowrap -top-12 dark:text-white text-black dark:bg-meta-4 py-2 px-4 rounded-md">
                    {label}
                </div>
            )}
        </div>
    </>
  )
}

export default TolTipBtnIconBg
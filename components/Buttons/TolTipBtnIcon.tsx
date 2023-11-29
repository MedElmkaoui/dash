'use client'

import Link from 'next/link'
import { useState } from 'react'

export type TolTipBtnIconProps= {
     children: React.ReactNode,
     href: string,
     label: string,
} 
function TolTipBtnIcon({children, href, label}: TolTipBtnIconProps) {
    const [openTolTip, setOpenTolTip] = useState(false)

  return (
    <>
        <div className="relative">
            <Link onMouseEnter={()=>{setOpenTolTip(true)}} onMouseLeave={()=> setOpenTolTip(false)}  href={href} className="hover:text-primary">
                {children}
            </Link>

            {openTolTip && (
                <div className="absolute text-sm  bg-gray whitespace-nowrap -top-12 dark:text-white text-black dark:bg-meta-4 py-2 px-4 rounded-md">
                    {label}
                </div>
            )}
        </div>
    </>
  )
}

export default TolTipBtnIcon
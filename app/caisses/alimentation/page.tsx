'use client'

import {useState} from 'react'
import BreadcrumbNoTitle from "@/components/Breadcrumbs/BreadcrumbNoTitle"
import Filter from "@/components/Filter/Filter"
import TableAlimentationCaisses from "@/components/Tables/TableAlimentationCaisses"
import Link from 'next/link'
import { RiExchangeDollarFill, RiSafe2Line } from "react-icons/ri";





const HistoriqueSoldeCaisse = () => {

  return (
    <>
        <BreadcrumbNoTitle pageName="Alimentation Caisses" />
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className=" mx-8 pt-10">
                <h2 className="text-title-md2 mb-2.5 font-semibold text-black dark:text-white  ">
                    Alimentations Caisse
                </h2>
            </div>
            <div className="text-sm ml-15 mt-3 mb-5 flex gap-8 w-full">
                <div className="flex items-center gap-2">
                    <span className="font-semibold ">
                        <RiExchangeDollarFill size={20}/> 
                    </span> 
                    <p className="text-sm">50000 Dh</p>
                </div>
            </div>
            <Filter />
            <TableAlimentationCaisses  />
        </div>
    </>
  )
}

export default HistoriqueSoldeCaisse

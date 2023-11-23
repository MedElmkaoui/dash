'use client'

import {useState} from 'react'
import BreadcrumbNoTitle from "@/components/Breadcrumbs/BreadcrumbNoTitle"
import Filter from "@/components/Filter/Filter"
import TableSoldesCaisses from "@/components/Tables/TableSoldesCaisses"
import Link from 'next/link'
import { RiExchangeDollarFill, RiSafe2Line } from "react-icons/ri";





const Caisse = () => {

  return (
    <>
        <BreadcrumbNoTitle pageName="Caisses" />
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className=" mx-8 pt-10">
                <h2 className="text-title-md2 mb-2.5 font-semibold text-black dark:text-white  ">
                    Historique des Soldes
                </h2>
                <p >Caisse : NameCaisse</p>
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
            <TableSoldesCaisses  />
        </div>
    </>
  )
}

export default Caisse
'use client'

import {useState} from 'react'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import Filter from "@/components/Filter/Filter"
import TableCaisses from "@/components/Tables/TableCaisses"
import Link from 'next/link'
import { RiExchangeDollarFill, RiSafe2Line } from "react-icons/ri"
import { HiOutlinePlusCircle } from 'react-icons/hi2'


const Caisse = () => {

  return (
    <>
        <Breadcrumb pageName="Caisses" showTitle={false} />
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex justify-between items-center mx-8 pt-10">
                <h2 className="text-title-md2 font-semibold text-black dark:text-white  ">
                    Caisse
                </h2>
                <Link
                    href='/caisses/new'
                    className="inline-flex items-center justify-center gap-2.5 rounded-md bg-black  py-3.5 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-10"
                    >
                    <span>
                        <HiOutlinePlusCircle  size={22} /> 
                    </span>
                    <span>Nouveau </span>
                </Link>
            </div>
            <div className="text-sm ml-15 mt-3 mb-5 flex gap-8 w-full">
                <div className="flex items-center gap-2">
                    <span className="font-semibold"><RiSafe2Line size={20} /></span> 
                    <p className="text-sm">05 Caisse(s) </p>     
                </div> 
                <div className="flex items-center gap-2">
                    <span className="font-semibold ">
                        <RiExchangeDollarFill size={20}/> 
                    </span> 
                    <p className="text-sm">50000 Dh</p>
                </div>
            </div>
            <Filter />
            <TableCaisses  />
        </div>
    </>
  )
}

export default Caisse

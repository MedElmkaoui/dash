'use client'

import {useState} from 'react'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import Filter from "@/components/Filter/Filter"
import { RiExchangeDollarFill } from "react-icons/ri";
import UsersCaissesTable from '@/components/Tables/UsersCaissesTable'
const Caisse = () => {

  return (
    <>
        <Breadcrumb pageName="Caisses" />
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className=" mx-8 pt-10">
                <h2 className="text-title-md2 mb-2.5 font-semibold text-black dark:text-white  ">
                    LUtilisateur
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
            <UsersCaissesTable   />
        </div>
    </>
  )
}

export default Caisse
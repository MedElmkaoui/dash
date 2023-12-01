'use client'

import {useState} from 'react'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import Filter from "@/components/Filter/Filter"
import Link from 'next/link'
import { RiDoorOpenLine, RiExchangeDollarFill, RiSafe2Line } from "react-icons/ri"
import { HiOutlinePlusCircle } from 'react-icons/hi2'
import Feed from '@/components/Feed/Feed'
import CardCaisse from '@/components/Cards/CardCaisses'


const Data= [
    {
      id: 1,
      name: "C-2150",
      solde: 0.0,
      agence:'Ag-500',
      User: {id:1 , name:'Ahmed'},
    },
    {
      id: 2,
      name: "C-5850",
      solde: 5000.0,
      agence:'Ag-500',
      User: {id:1 , name:'Mohamed'},
    },
    {
      id: 3,
      name: "C-2550",
      solde: 0.0,
      agence:'Ag-500',
      User: {id:1 , name:'Ahmed'},
    },
    {
      id: 4,
      name: "C-20",
      solde: 3005.0,
      agence:'Ag-600',
      User: {id:2 , name:'Brahim'},
    },
    
    
  ];

  const filters = [
    {
      id: 'category',
      name: 'CATEGORIE',
      options: [
        { value: 'Category Two', label: 'Category Two' },
        { value: 'Category One', label: 'Category One' },
        { value: 'Category Tree', label: 'Category Tree' },
      ],
    },
    {
      id: 'comptes',
      name: 'COMPTES',
      options: [
        { value: '2l', label: 'CIH', checked: false },
        { value: '6l', label: 'TIJARI', checked: false },
      ],
    },
  ]

const Caisse = () => {

  return (
    <>
        <Breadcrumb pageName="Caisses" showTitle={false} />
        <div className="rounded-sm border h-[82vh] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex justify-between items-center mx-8 pt-10">
                <h2 className="text-title-md2 font-semibold text-black dark:text-white  ">
                    Caisse
                </h2>
                <Link
                    href='/caisses/new'
                    className="inline-flex items-center justify-center gap-2.5 rounded-md bg-black  py-3.5 px-10 text-center font-light text-white hover:bg-opacity-90 lg:px-4 xl:px-10"
                    >
                    <span>
                        <HiOutlinePlusCircle  size={22} /> 
                    </span>
                    <span>Nouveau</span>
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
            <Filter filters={filters} />
            <Feed>
                {
                    Data.map((data)=>(
                        <CardCaisse key={data.id} data={data} >
                            <RiDoorOpenLine size={18} /> 
                        </CardCaisse>
                    ))
                }
            </Feed>

        </div>
    </>
  )
}

export default Caisse

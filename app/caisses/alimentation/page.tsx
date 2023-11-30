'use client'

import {useState} from 'react'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import Filter from "@/components/Filter/Filter"
import { RiCoinsLine, RiExchangeDollarFill, RiSafe2Line } from "react-icons/ri";
import AlimentationCaisseTable from '@/components/Tables/AlimentationCaisseTable';
import Link from 'next/link';
import CardAlimentationCaisses from '@/components/Cards/CardAlimentationCaisses'
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import Feed from '@/components/Feed/Feed';


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

const TypeAlimentationEnum = {
  CTC: "CTC",
  ATC: "ATC",
  ETC: "ETC",
};
  
const AlimentationCaisseData = [
    {
      id: 1,
      date: '2014/21/02',
      userEmiteur: {id:1, name: 'Mohamed', caisse:{
        id: 1,
        name: "C-2150",
        solde: 0.0,
        agence:'Ag-500',
        User: {id:1 , name:'Ahmed'},
      }},
      userReciver: {id:1, name: 'Omar', caisse: {
        id: 2,
        name: "C-2150",
        solde: 0.0,
        agence:'Ag-500',
        User: {id:1 , name:'Ahmed'},
      },},
      type: TypeAlimentationEnum.CTC,
      montant: 500.0,
      compte: {id:1, name: 'CIH'},
      justif: '--',
    },
    {
      id: 2,
      date: '2014/21/02',
      userEmiteur: {id:1, name: 'Mohamed', caisse:{
        id: 1,
        name: "C-2150",
        solde: 0.0,
        agence:'Ag-500',
        User: {id:1 , name:'Ahmed'},
      }},
      userReciver: {id:1, name: 'Omar', caisse: {
        id: 2,
        name: "C-2150",
        solde: 0.0,
        agence:'Ag-500',
        User: {id:1 , name:'Ahmed'},
      },},
      type: TypeAlimentationEnum.CTC,
      montant: 500.0,
      compte: {id:1, name: 'CIH'},
      justif: '',
    },
    {
      id: 3,
      date: '2014/21/02',
      userEmiteur: {id:1, name: 'Mohamed', caisse:{
        id: 1,
        name: "C-2150",
        solde: 0.0,
        agence:'Ag-500',
        User: {id:1 , name:'Ahmed'},
      }},
      userReciver: {id:1, name: 'Omar', caisse: {
        id: 2,
        name: "C-2150",
        solde: 0.0,
        agence:'Ag-500',
        User: {id:1 , name:'Ahmed'},
      },},
      type: TypeAlimentationEnum.CTC,
      montant: 500.0,
      compte: {id:1, name: 'CIH'},
      justif: '',
    },
  ];

const HistoriqueSoldeCaisse = () => {

  return (
    <>
        <Breadcrumb pageName="Alimentation Caisses" showTitle={false} />
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex justify-between items-center mx-8 pt-10">
                <h2 className="text-title-md2 font-semibold text-black dark:text-white  ">
                    Alimentation Caisse
                </h2>
                <Link
                    href='/caisses/alimentation/new'
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
                    <span className="font-semibold ">
                        <RiExchangeDollarFill size={20}/> 
                    </span> 
                    <p className="text-sm">50000 Dh</p>
                </div>
            </div>
            <Filter filters={filters}/>
            <Feed>
                {AlimentationCaisseData.map((ele)=>(
                  <CardAlimentationCaisses key={ele.id} data={ele} >
                      <RiCoinsLine size={20} /> 
                  </CardAlimentationCaisses>
                ))}
            </Feed>
        </div>
    </>
  )
}

export default HistoriqueSoldeCaisse

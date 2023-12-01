'use client'

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import Filter from "@/components/Filter/Filter"
import { RiCoinsLine, RiExchangeDollarFill } from "react-icons/ri";
import Link from 'next/link';
import CardAlimentationComptes from '@/components/Cards/CardAlimentationComptes'
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
  ATA: "ATA",
  ATC: "ATC",
  ETA: "ETA",
};
  
const AlimentationComptesData = [
    {
      id: 1,
      date: '2014/21/02',
      compteEmiteur: {id:1, name:"CIH", sold: 0.0, rib:"123456"},
      compteReciver: {id:2, name:"TIJARI", sold: 100.0, rib:"1215456"},
      type: TypeAlimentationEnum.ATA,
      montant: 500.0,
      caisse: {
        id: 3,
        name: "C-2550",
        solde: 0.0,
        agence:'Ag-500',
        User: {id:1 , name:'Ahmed'},
      },
      justif:''
    },
    {
      id: 2,
      date: '2014/21/02',
      compteEmiteur: {id:1, name:"CIH", sold: 0.0, rib:"123456"},
      compteReciver: {id:2, name:"TIJARI", sold: 100.0, rib:"1215456"},
      type: TypeAlimentationEnum.ATA,
      montant: 1500.0,
      caisse: {
        id: 3,
        name: "C-2550",
        solde: 0.0,
        agence:'Ag-500',
        User: {id:1 , name:'Ahmed'},
      },
      justif:''
    },
    
  ];

const HistoriqueSoldeCaisse = () => {

  return (
    <>
        <Breadcrumb pageName="Alimentation Comptes" showTitle={false} />
        <div className="rounded-sm border h-[82vh] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex justify-between items-center mx-8 pt-10">
                <h2 className="text-title-md2 font-semibold text-black dark:text-white  ">
                    Alimentations Compte
                </h2>
                <Link
                    href='/accounts/alimentation/new'
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
                {AlimentationComptesData.map((ele)=>(
                  <CardAlimentationComptes key={ele.id} data={ele} >
                      <RiCoinsLine size={20} /> 
                  </CardAlimentationComptes>
                ))}
            </Feed>
        </div>
    </>
  )
}

export default HistoriqueSoldeCaisse

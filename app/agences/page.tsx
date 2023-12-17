'use client'
import {useState, useEffect} from 'react'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import Filter from "@/components/Filter/Filter"
import CardAgences from "@/components/Cards/CardAgences"
import Link from 'next/link'
import { RiExchangeDollarFill, RiHomeOfficeLine } from "react-icons/ri";
import { HiOutlinePlusCircle  } from "react-icons/hi2";
import { Agence  } from "@/types/agence";
import Feed from "@/components/Feed/Feed"

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



const Agences = () => {

     const [agencies, setAgences] = useState<Agence[]>([])

     useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/agence'); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setAgences(data);
        } catch (error: any) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchData();

     }, [])
    

  return (
    <>
        <Breadcrumb pageName="Agences" showTitle={false} />
        <div className="rounded-sm border h-[82vh] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
           
            <div className="flex justify-between items-center mx-8 pt-10">
                
                <h2 className="text-title-md2 font-semibold text-black dark:text-white  ">
                    Agences
                </h2>
                <div className="flex gap-3">
                  <Link
                      href="/agences/new"
                      className="inline-flex font-light items-center justify-center rounded-lg gap-2.5 bg-black py-3.5 px-10 text-center text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                      >
                      <span>
                          <HiOutlinePlusCircle  size={22} /> 
                      </span>
                      <span>Nouveau </span>
                  </Link>
                </div>
                
            </div>

            <div className="text-sm ml-15 mt-3 mb-5 flex gap-8 w-full">
                <div className="flex items-center gap-2">
                    <span className="font-semibold"><RiHomeOfficeLine size={20} /></span> 
                    <p className="text-sm">{agencies.length} Agence(s) </p>     
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
                {agencies.map((ele, key) =>(
                <CardAgences key={key} data={ele} >
                    <RiHomeOfficeLine size={20} />
                </CardAgences>
                ))} 
            </Feed>
        </div>
    </>
  )
}

export default Agences

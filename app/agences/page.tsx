import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import Filter from "@/components/Filter/Filter"
import CardAgences from "@/components/Cards/CardAgences"
import TableAgences from "@/components/Tables/TableAgences"
import Link from 'next/link'
import { RiExchangeDollarFill, RiHomeOfficeLine } from "react-icons/ri";
import { HiOutlinePlusSmall } from "react-icons/hi2";



const Agences = () => {
  return (
    <>
        <Breadcrumb pageName="Agences" showTitle={false} />
        <div className="rounded-sm border border-stroke h-screen bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
           
            <div className="flex justify-between items-center mx-8 pt-10">
                
                <h2 className="text-title-md2 font-semibold text-black dark:text-white  ">
                    Agences
                </h2>
                <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg gap-2.5 bg-primary py-4 px-6 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-6"
                    >
                    <span>
                        <HiOutlinePlusSmall size={25} /> 
                    </span>
                    Ajouter
                </Link>
                
            </div>

            <div className="text-sm ml-15 mt-3 mb-5 flex gap-8 w-full">
                <div className="flex items-center gap-2">
                    <span className="font-semibold"><RiHomeOfficeLine size={20} /></span> 
                    <p className="text-sm">05 Agence(s) </p>     
                </div> 
                <div className="flex items-center gap-2">
                    <span className="font-semibold ">
                        <RiExchangeDollarFill size={20}/> 
                    </span> 
                    <p className="text-sm">50000 Dh</p>
                </div>
                
            </div>

            <Filter />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 mx-12 my-8 2xl:gap-7.5">
                <CardAgences adress="Tin Mensor, Sidi bibé, Agadir" name="Tin Mensor" soldDepart="15 000" >
                    <RiHomeOfficeLine size={20} />
                </CardAgences>
                <CardAgences adress="Tin Mensor, Sidi bibé, Agadir" name="Agadir" soldDepart="12 000" >
                    <RiHomeOfficeLine size={20} />
                </CardAgences>
                <CardAgences adress="Tin Mensor, Sidi bibé, Agadir" name="Tikioune" soldDepart="9 000" >
                    <RiHomeOfficeLine size={20} />
                </CardAgences>
                <CardAgences adress="Tin Mensor, Sidi bibé, Agadir" name="Amskrod" soldDepart="20 000" >
                    <RiHomeOfficeLine size={20} />
                </CardAgences>
                
            </div>

            {/*<TableAgences  /> */}
        </div>
    </>
  )
}

export default Agences

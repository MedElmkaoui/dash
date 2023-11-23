import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import Filter from "@/components/Filter/Filter"
import CardAgences from "@/components/Cards/CardAgences"
import Link from 'next/link'
import { RiExchangeDollarFill, RiHomeOfficeLine } from "react-icons/ri";
import { HiOutlinePlusCircle  } from "react-icons/hi2";
import Feed from "@/components/Feed/Feed"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dash -Agences",
  description: "dashboard for Admins",
  // other metadata
};



const Agences = () => {

    const Data= [
        {
          id: 1,
          name: "Ag-2150",
          solde: 0.0,
          fix: `+212 54215487`,
          adresse: "Tikouine, N° 04",
          ville:"Agadir"
        },
        {
          id: 2,
          name: "Ag-21548",
          solde: 59.0,
          fix: `+212 54215487`,
          adresse: "Tikouine, N° 04",
          ville:"Agadir"
        },
        {
          id: 3,
          name: "Ag-9874",
          solde: 99.0,
          fix: `+212 54215487`,
          adresse: "Tikouine, N° 04",
          ville: "Agadir",
        },
        {
          id: 4,
          name: "Ag-985",
          solde: 9922.0,
          fix: `+212 54215487`,
          adresse: "Tikouine, N° 10",
          ville: "Agadir",
        },
        {
          id: 5,
          name: "Ag-985",
          solde: 91472.0,
          fix: `+212 54215487`,
          adresse: "Agadir, N° 10",
          ville: "Agadir",
        },
        {
          id: 6,
          name: "Ag-985",
          solde: 9569.0,
          fix: `+212 54215487`,
          adresse: "Amskroud, N° 10",
          ville: "Agadir",
        },
      ];

  return (
    <>
        <Breadcrumb pageName="Agences" showTitle={false} />
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
           
            <div className="flex justify-between items-center mx-8 pt-10">
                
                <h2 className="text-title-md2 font-semibold text-black dark:text-white  ">
                    Agences
                </h2>
                <Link
                    href="/agences/new"
                    className="inline-flex items-center justify-center rounded-lg gap-2.5 bg-black py-3.5 px-10 text-center text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                    <span>
                        <HiOutlinePlusCircle  size={22} /> 
                    </span>
                    <span>Nouveau </span>
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

            <Feed>
                {Data.map((ele, key) =>(
                <CardAgences key={key} adress={`${ele.adresse} | ${ele.ville}`} name={ele.name} soldDepart={ele.solde.toString()} hrefEdit={`agences/${ele.id}/update`} >
                    <RiHomeOfficeLine size={20} />
                </CardAgences>
                ))} 
            </Feed>
        </div>
    </>
  )
}

export default Agences

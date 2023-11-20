'use client'


import { Package } from "@/types/package";
import Link from "next/link"
import { RiDeleteBin5Line, RiEditLine, RiSafe2Line} from "react-icons/ri";

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
];



const TableAgences = () => {


  return (
    <div className="rounded-sm  bg-white px-5 pt-6 pb-2.5 shadow-default  dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white ">
                Nom de l agence
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Adresse
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Fix
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Ville
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                --
              </th>
            </tr>
          </thead>
          <tbody>
            {Data.map((dataItem, key) => (
              <tr key={key}>
                <td className={`${Data.length - 1 !==  key ? 'border-b border-[#eee]':''} py-5 px-4 dark:border-strokedark`}>
                  <h5 className="font-medium text-black dark:text-white">
                    {dataItem.name}
                  </h5>
                  <p className="text-sm">{dataItem.solde} DH</p>
                </td>
                <td className={`${Data.length - 1 !==  key ? 'border-b border-[#eee]':''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {dataItem.adresse}
                  </p>
                </td>
                <td className={`${Data.length - 1 !==  key ? 'border-b border-[#eee]':''} py-5 px-4 dark:border-strokedark`}>
                  {dataItem.fix}
                </td>
                <td className={`${Data.length - 1 !==  key ? 'border-b border-[#eee]':''} py-5 px-4 dark:border-strokedark`}>
                  {dataItem.ville}
                </td>
                <td className={`${Data.length - 1 !==  key ? 'border-b border-[#eee]':''} py-5 px-4 dark:border-strokedark`}>
                  <div className="flex items-center space-x-3.5">
                    <Link  href={`/agences/${dataItem.id}/update`} className="hover:text-primary">
                        <RiEditLine size={20}  />
                    </Link>
                    <Link href='' className="hover:text-primary">
                      <RiDeleteBin5Line size={20}  />
                    </Link>
                    <Link href='/caisses' className="hover:text-primary">
                      <RiSafe2Line size={20}/>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAgences;

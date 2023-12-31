'use client'


import {useState} from "react";
import Link from "next/link";
import { RiDeleteBin5Line, RiEditLine, RiCoinsLine, RiExchangeBoxLine} from "react-icons/ri";
import TolTipBtnIcon from "../Buttons/TolTipBtnIcon";

const Data= [
  {
    id: 1,
    name: "C-2150",
    solde: 0.0,
    agence:'Ag-500',
    User: `Omar`,
  },
  {
    id: 2,
    name: "C-2150",
    solde: 0.0,
    agence:'Ag-500',
    User: `Brahim`,
  },
  {
    id: 3,
    name: "C-2150",
    solde: 0.0,
    agence:'Ag-500',
    User: `Mohamed`,
  },
  
];



const TableCaisses = () => {


  return (
    <div className="rounded-sm  bg-white m-6 px-5 pt-6 pb-2.5 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white ">
                Nom Caisse
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Agence
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Utilisateur
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                --
              </th>
            </tr>
          </thead>
          <tbody>
            {Data.map((dataItem, key) => (
              <tr key={key}>
                <td className={`${Data.length - 1 !==  key ? 'border-b border-[#eee]':''} py-5 px-8 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {dataItem.name}
                  </p>
                  <p className="text-sm">{dataItem.solde} DH</p>
                </td>
                <td className={`${Data.length - 1 !==  key ? 'border-b border-[#eee]':''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {dataItem.agence}
                  </p>
                </td>
                <td className={`${Data.length - 1 !==  key ? 'border-b border-[#eee]':''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {dataItem.User}
                  </p>
                </td>
                <td className={`${Data.length - 1 !==  key ? 'border-b border-[#eee]':''} py-5 px-4 dark:border-strokedark`}>
                  <div className="flex items-center space-x-3.5">
                    <TolTipBtnIcon href={`/caisses/${dataItem.id}/update`} label="Modifier"   ><RiEditLine size={20}  /> </TolTipBtnIcon>
                    <TolTipBtnIcon href='' label="Suprimer"   ><RiDeleteBin5Line size={20}  /> </TolTipBtnIcon>
                    <TolTipBtnIcon href={`/caisses/${dataItem.id}/historique-soldes`} label="Historique" ><RiCoinsLine size={20}/> </TolTipBtnIcon>
                    <TolTipBtnIcon href={`/caisses/alimentation`} label="Alimentation" ><RiExchangeBoxLine size={20}/> </TolTipBtnIcon>

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

export default TableCaisses;

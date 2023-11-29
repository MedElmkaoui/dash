'use client'

import { useState } from "react";
import Link from "next/link";
import { RiDeleteBin5Line, RiEditLine, RiCoinsLine, RiExchangeBoxLine } from "react-icons/ri";

const SoldCaissesData = [
  {
    id: 1,
    idCaisse: 1, // Belongs to Caisses entity
    soldeInitial: 0.0,
    soldeFinale: 100.0,
    Date: "2023-11-25",
  },
  // Add more SoldCaisses data as needed
];

const SoldCaissesTable = () => {
  return (
    <div className="rounded-sm bg-white m-6 px-5 pt-6 pb-2.5 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="py-4 px-4 font-medium text-black dark:text-white">Date</th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Solde Initial
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Solde Finale
              </th>
              
              <th className="py-4 px-4 font-medium text-black dark:text-white"></th>
            </tr>
          </thead>
          <tbody>
            {SoldCaissesData.map((soldCaissesItem, key) => (
              <tr key={key}>
                 <td className={`${SoldCaissesData.length - 1 !== key ? "border-b border-[#eee]" : ""} font-light py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{soldCaissesItem.Date}</p>
                </td>
                <td className={`${SoldCaissesData.length - 1 !== key ? "border-b border-[#eee]" : ""} font-light py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{soldCaissesItem.soldeInitial} DH</p>
                </td>
                <td className={`${SoldCaissesData.length - 1 !== key ? "border-b border-[#eee]" : ""} font-light py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{soldCaissesItem.soldeFinale} DH</p>
                </td>
               
                <td className={`${SoldCaissesData.length - 1 !== key ? "border-b border-[#eee]" : ""} font-light py-5 px-4 dark:border-strokedark`}>
                  <div className="flex items-center space-x-3.5">
                    {/* Add your actions here */}
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

export default SoldCaissesTable;

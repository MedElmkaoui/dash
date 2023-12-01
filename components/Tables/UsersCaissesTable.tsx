'use client'

import { useState } from "react";


const UsersCaissesData = [
  {
    id: 1,
    user: {id:1, name: "Mohamed"}, 
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
                Liutilisateur
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white"></th>
            </tr>
          </thead>
          <tbody>
            {UsersCaissesData.map((UserCaisseItem, key) => (
              <tr key={key}>
                 <td className={`${UsersCaissesData.length - 1 !== key ? "border-b border-[#eee]" : ""} font-light py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{UserCaisseItem?.Date}</p>
                </td>
                <td className={`${UsersCaissesData.length - 1 !== key ? "border-b border-[#eee]" : ""} font-light py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{UserCaisseItem?.user.name}</p>
                </td>
               
                <td className={`${UsersCaissesData.length - 1 !== key ? "border-b border-[#eee]" : ""} font-light py-5 px-4 dark:border-strokedark`}>
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

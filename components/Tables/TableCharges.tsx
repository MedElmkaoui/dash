// TableCharges.tsx
import React from 'react';
import Link from 'next/link';
import { RiDeleteBin5Line, RiEditLine } from 'react-icons/ri';

const Data = [
  {
    id: 1,
    iduser: 1,
    date: '2023-11-23',
    montant: 100,
    type: 'Alimentation',
    idCaisses: 1,
    justif: 'receipt.pdf',
    note: 'Expense for groceries',
  },
  // Add more data as needed
];

const TableCharges = () => {
  return (
    <div className="rounded-sm bg-white m-6 px-5 pt-6 pb-2.5 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white">ID</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Date</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Montant</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Type</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Caisse</th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((dataItem) => (
              <tr key={dataItem.id}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{dataItem.id}</td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{dataItem.date}</td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{dataItem.montant}</td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{dataItem.type}</td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">{dataItem.idCaisses}</td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <Link href={`/charges/${dataItem.id}/update`} className="hover:text-primary">
                      <RiEditLine size={20} />
                    </Link>
                    <Link href="" className="hover:text-primary">
                      <RiDeleteBin5Line size={20} />
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

export default TableCharges;

import { useState } from 'react';
import Link from 'next/link';
import { RiDeleteBin5Line, RiEditLine } from 'react-icons/ri';
import TolTipBtnIcon from '../Buttons/TolTipBtnIcon';

const UserData = [
  {
    id: 1,
    firstName: 'Omar',
    lastName: 'Smith',
    email: 'omar@example.com',
    phone: '123-456-7890',
    adr: '123 Street, City',
    salary: 50000,
    cin: 'A123456',
    dateinscription: '2023-01-01',
  },
  {
    id: 2,
    firstName: 'Brahim',
    lastName: 'Jones',
    email: 'brahim@example.com',
    phone: '987-654-3210',
    adr: '456 Street, City',
    salary: 60000,
    cin: 'B987654',
    dateinscription: '2023-02-01',
  },
  {
    id: 3,
    firstName: 'Mohamed',
    lastName: 'Brown',
    email: 'mohamed@example.com',
    phone: '111-222-3333',
    adr: '789 Street, City',
    salary: 70000,
    cin: 'C111222',
    dateinscription: '2023-03-01',
  },
];

const TableUtilisateurs = () => {
  return (
    <div className="rounded-sm  bg-white m-6 px-5 pt-6 pb-2.5 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white ">
                Date Inscription
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white ">
                Prénom
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Nom
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Tel
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Email
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {UserData.map((user, key) => (
              <tr key={key}>
                <td className={`${UserData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-5 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{user.dateinscription}</p>
                </td>
                <td className={`${UserData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-5 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{user.firstName}</p>
                </td>
                <td className={`${UserData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-5 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{user.lastName}</p>
                </td>
                <td className={`${UserData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{user.phone}</p>
                </td>
                <td className={`${UserData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{user.email}</p>
                </td>
                <td className={`${UserData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <div className="flex items-center space-x-3.5">
                    <TolTipBtnIcon href={`/utilisateurs/${user.id}/update`} label="Modifier">
                      <RiEditLine size={20} />
                    </TolTipBtnIcon>
                    {/* Add other actions as needed */}
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

export default TableUtilisateurs;

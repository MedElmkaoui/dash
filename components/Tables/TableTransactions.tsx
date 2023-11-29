import React, { FC } from 'react';
import { RiDeleteBin5Line, RiEditLine } from 'react-icons/ri';
import TolTipBtnIcon from '../Buttons/TolTipBtnIcon';

interface User {
  id: number;
  name: string;
}

interface Transaction {
  id: number;
  userResponsable: User;
  montant: number,
  produit: string;
  date: string;
  inOut: string;
}

const TransactionsData: Transaction[] = [
  {
    id: 1,
    userResponsable: { id: 1, name: 'Omar' },
    montant: 150.0,
    produit: 'WisterUnion',
    date: '2023-02-01',
    inOut: 'In',
  },
  {
    id: 2,
    userResponsable: { id: 1, name: 'Brahim' },
    montant: 150.0,
    produit: 'WisterUnion',
    date: '2023-02-01',
    inOut: 'Out',
  },
  // Add more transaction items as needed
];

interface TableTransactionsProps {}

const TableTransactions: FC<TableTransactionsProps> = () => {
  return (
    <div className="rounded-sm  bg-white pt-8  pb-2.5 dark:bg-boxdark ">
      <div className="max-w-full overflow-scrolling-touch">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Produit
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Montant
              </th>
             
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                In/Out
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {TransactionsData.map((transaction, key) => (
              <tr key={key}>
                <td className={`${TransactionsData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {transaction.produit} 
                  </p>
                </td>
                <td className={`${TransactionsData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">
                    {transaction.montant} DH
                  </p>
                </td>
                <td className={`${TransactionsData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className={`text-white w-fit py-1 px-6 rounded-full dark:text-white ${transaction.inOut == 'In'?'bg-meta-3':'bg-meta-7'}`}>
                    {transaction.inOut}
                  </p>
                </td>
                <td className={`${TransactionsData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <div className="flex items-center space-x-3.5">
                    {/* Replace the href values with the appropriate links */}
                    <TolTipBtnIcon href={`/transactions/${transaction.id}/update`} label="Modifier">
                      <RiEditLine size={20} />
                    </TolTipBtnIcon>
                    <TolTipBtnIcon href={``} label="Supprimer">
                      <RiDeleteBin5Line size={20} />
                    </TolTipBtnIcon>
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

export default TableTransactions;

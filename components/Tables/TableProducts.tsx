

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { RiDeleteBin5Line, RiEditLine, RiCoinsLine, RiExchangeBoxLine } from 'react-icons/ri';
import TolTipBtnIcon from '../Buttons/TolTipBtnIcon';

interface TableProduitsProps {
  
}

const TableProduits: React.FC<TableProduitsProps> = () => {

  const produitsData: Product[] = [ 
    {
      id: 1,
      nom: 'Produit A',
      cat: 'Category one',
      compte: 'Compte CIH',
      cout: 50.0,
      entree_sortie: 'entrée',
    },
    {
      id: 2,
      nom: 'Produit B',
      cat: 'Category Two',
      compte: 'Compte CIH',
      cout: 500.0,
      entree_sortie: 'entrée',
    },
    // Ajoutez plus de données produit au besoin
  ];
  return (
    <div className="rounded-sm bg-white m-6 px-5 pt-6 pb-2.5 dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Nom
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Catégorie
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Compte
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Coût
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Entrée/Sortie
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">--</th>
            </tr>
          </thead>
          <tbody>
            {produitsData.map((produit, key) => (
              <tr key={key}>
                <td className={`${produitsData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-5 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{produit.nom}</p>
                </td>
                <td className={`${produitsData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{produit.cat}</p>
                </td>
                <td className={`${produitsData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{produit.compte}</p>
                </td>
                <td className={`${produitsData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{produit.cout} DH</p>
                </td>
                <td className={`${produitsData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <p className="text-black dark:text-white">{produit.entree_sortie}</p>
                </td>
                <td className={`${produitsData.length - 1 !== key ? 'border-b border-[#eee]' : ''} py-5 px-4 dark:border-strokedark`}>
                  <div className="flex items-center space-x-3.5">
                    <TolTipBtnIcon href={`/settings/produits/${produit?.id}/update`} label="Modifier"   ><RiEditLine size={20}  /></TolTipBtnIcon>
                    <TolTipBtnIcon href={``} label="Suprimer"   ><RiDeleteBin5Line size={20} /></TolTipBtnIcon>
                    
                    
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

export default TableProduits;

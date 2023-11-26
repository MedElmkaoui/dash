// Produit.tsx
import React from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import Filter from '@/components/Filter/Filter';
import TableProduits from '@/components/Tables/TableProducts';
import Link from 'next/link';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { Product } from '@/types/product';



const Produits: React.FC = () => {
  

  return (
    <>
      <Breadcrumb pageName="Produits" showTitle={false} />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-between items-center mx-8 pt-10">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Produits
          </h2>
          <Link
            href="/settings/produits/new"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-black  py-3.5 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-10"
          >
            <span>
              <HiOutlinePlusCircle size={22} />
            </span>
            <span>Nouveau</span>
          </Link>
        </div>
        <div className="text-sm ml-15 mt-3 mb-5 flex gap-8 w-full">
          {/* Similaire au composant Caisse */}
          {/* Afficher les statistiques des produits ou d'autres informations */}
        </div>
        <Filter />
        <TableProduits  />
      </div>
    </>
  );
};

export default Produits;

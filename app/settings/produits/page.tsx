// Produit.tsx
import React from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import Filter from '@/components/Filter/Filter';
import CardProduits from '@/components/Cards/CardProduits';
import TableProduits from '@/components/Tables/TableProducts';
import Link from 'next/link';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { Product } from '@/types/product';
import Feed from '@/components/Feed/Feed';
import { CiShoppingBasket } from "react-icons/ci";

const filters = [
  {
    id: 'category',
    name: 'CATEGORIE',
    options: [
      { value: 'Category Two', label: 'Category Two' },
      { value: 'Category One', label: 'Category One' },
      { value: 'Category Tree', label: 'Category Tree' },
    ],
  },
  {
    id: 'comptes',
    name: 'COMPTES',
    options: [
      { value: '2l', label: 'CIH', checked: false },
      { value: '6l', label: 'TIJARI', checked: false },
    ],
  },
]

const produitsData: Product[] = [ 
  {
    id: 1,
    nom: 'Produit A',
    cat: 'Category one',
    compte: 'Compte CIH',
    cout: 50.0,
    in_out: 'In',
  },
  {
    id: 2,
    nom: 'Produit B',
    cat: 'Category Two',
    compte: 'Compte CIH',
    cout: 500.0,
    in_out: 'Out',
  },
  // Ajoutez plus de données produit au besoin
];

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
        <Filter filters={filters} />
        <Feed>
            {produitsData.map((produit) => (
                  <CardProduits key={produit.id} data={produit} >
                    <CiShoppingBasket size={20} /> 
                  </CardProduits>
            ))

            }
        </Feed>
      </div>
    </>
  );
};

export default Produits;

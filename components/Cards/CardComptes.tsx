import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Comptes } from '@/types/comptes';
import TolTipBtnIcon from '../Buttons/TolTipBtnIcon';
import { RiCoinsLine, RiDeleteBin5Line, RiEditLine, RiExchangeBoxLine, RiUserSettingsLine } from 'react-icons/ri';
import { BiArchive } from 'react-icons/bi';

interface CardComptesProps {
  data: Comptes;
  children: ReactNode;
}

const CardComptes: React.FC<CardComptesProps> = ({
  data,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>
        <div className="flex">
          <p>{data?.sold} DH</p>
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {data?.name}
          </h4>
          <span className="text-sm font-medium"> {data?.rib} </span>
        </div>
      </div>
      <div className="flex gap-3 pt-6 ">
        {/* Assuming you have similar routes for Comptes as in the original code */}
        <TolTipBtnIcon href={`/comptes/${data?.id}/update`} label="Modifier" ><RiEditLine size={20} /> </TolTipBtnIcon>
        <TolTipBtnIcon href='' label="Supprimer" ><RiDeleteBin5Line size={20} /> </TolTipBtnIcon>
        {/* You may need to adjust the routes based on your application structure */}
        <TolTipBtnIcon href={`/comptes/${data?.id}/historique-soldes`} label="Historique" ><RiCoinsLine size={20} /> </TolTipBtnIcon>
        <TolTipBtnIcon href={`/comptes/alimentation`} label="Alimentation" ><RiExchangeBoxLine size={20} /> </TolTipBtnIcon>
        <TolTipBtnIcon href={`/comptes/${data?.id}/produit`} label="Produits" ><BiArchive  size={20} /> </TolTipBtnIcon>
      </div>
    </div>
  );
};

export default CardComptes;


import React, { ReactNode } from 'react';
import TolTipBtnIcon from '../Buttons/TolTipBtnIcon';
import { RxFile  } from "react-icons/rx";
import { RiDeleteBin5Line, RiEditLine, RiFileInfoLine } from 'react-icons/ri';
import { AlimentationCaisse } from '@/types/alimenationCaisse';

interface CardDataStatsProps {
  data : AlimentationCaisse,
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({data, children}) => {

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>
        <div className="flex">
          <p>{data?.date}</p>
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {data?.montant} DH
          </h4>
          <span className="text-sm font-medium">From {data?.userEmiteur.name} To {data?.userReciver.name} </span>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex gap-3">
          <TolTipBtnIcon href={`/caisses/alimentation/${data?.id}/update`} label="Modifier"   ><RiEditLine size={20}  /> </TolTipBtnIcon>
          <TolTipBtnIcon href='' label="Suprimer"   ><RiDeleteBin5Line size={20}  /> </TolTipBtnIcon>
        </div>
        {data?.justif !='' ?  (
          <div className="flex">
            <TolTipBtnIcon href={data?.justif} label='Justification'>
              <RxFile size={18} /> 
            </TolTipBtnIcon>
          </div>
        ):( 
          <div className="flex">
            <TolTipBtnIcon href={''} label='Aucun Fichier'>
              <RiFileInfoLine  size={18} /> 
            </TolTipBtnIcon>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDataStats;

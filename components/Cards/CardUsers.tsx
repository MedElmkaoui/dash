import Link from 'next/link';
import React, { ReactNode } from 'react';
import {User} from '@/types/user'
import TolTipBtnIcon from '../Buttons/TolTipBtnIcon';
import { RiCoinsLine, RiDeleteBin5Line, RiEditLine, RiExchangeBoxLine, RiGroupLine, RiUserSettingsLine } from 'react-icons/ri';

interface CardDataStatsProps {
  data : User,
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
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
          <p>{data?.dateInscription} </p>
        </div>
      </div>
      

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {data?.fName} {data?.lName}
          </h4>
          <span className="text-sm font-medium"> {data?.tel} | {data?.email} </span>
        </div>
      </div>
      <div className="flex gap-3 pt-6 ">
        <TolTipBtnIcon href={`/settings/users/${data?.id}/update`} label="Modifier"   ><RiEditLine size={20}  /> </TolTipBtnIcon>
        <TolTipBtnIcon href='' label="Suprimer"   ><RiDeleteBin5Line size={20}  /> </TolTipBtnIcon>
      </div>
    </div>
  );
};

export default CardDataStats;

import Link from 'next/link';
import React, { ReactNode } from 'react';


interface CardDataStatsProps {
  adress: string;
  name: string;
  soldDepart: string;
  hrefEdit: string,
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  adress,
  name,
  soldDepart,
  hrefEdit,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>
        <div className="flex">
          <p>{soldDepart} DH</p>
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {name}
          </h4>
          <span className="text-sm font-medium"> {adress} </span>
        </div>
      </div>
      <div className="flex gap-6 pt-6 pl-2">
        <Link href={hrefEdit} className='hover:text-primary'>Edit</Link>
        <Link href={''} className='hover:text-primary'>Caisses</Link>
        <Link href={''} className='hover:text-primary'>Suprimer</Link>
      </div>
    </div>
  );
};

export default CardDataStats;

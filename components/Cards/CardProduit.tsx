import Link from 'next/link';
import React, { ReactNode } from 'react';


interface CardDataStatsProps {
  name: string;
  category: string;
  compte: string;
  in_out: string,
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  category,
  name,
  compte,
  in_out,
  children,
}) => {
  return (
    <div className="rounded-sm w-65 border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>
        <div className="flex">
          <p>{in_out}</p>
        </div>
      </div>
      

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {name}
          </h4>
          <span className="text-sm font-medium"> {category} </span> <br />
          <span className="text-sm font-medium"> {compte} </span>
        </div>
      </div>
      
    </div>
  );
};

export default CardDataStats;

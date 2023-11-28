import Link from 'next/link';
import ModalsNewTransaction from '@/components/Modals/ModalsNewTransaction';
import React, { ReactNode, useState } from 'react';


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
  in_out,
  children,
}) => {

  const [openModals, setOpenModals] = useState(false)
  return (
    <button onClick={()=>setOpenModals(true)}>
      <div className="rounded-sm  border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
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
          <span className="text-sm font-medium"> {category} </span>
        </div>
      </div>
      
      </div>
      {openModals && (
        <ModalsNewTransaction setModel={setOpenModals} />
      )}
    </button>

    
  )
};

export default CardDataStats;

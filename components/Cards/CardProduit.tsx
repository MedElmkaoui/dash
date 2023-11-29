
import ModalsNewTransaction from '@/components/Modals/ModalsNewTransaction';
import React, { ReactNode, useState } from 'react';
import { Product } from '@/types/product';


interface CardDataStatsProps {
  data: Product
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  data,
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
          <p>{data?.in_out}</p>
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {data?.nom}
          </h4>
          <span className="text-sm font-medium"> {data?.cat} </span>
        </div>
      </div>
      
      </div>
      {openModals && (
        <ModalsNewTransaction  setModel={setOpenModals} />
      )}
    </button>

    
  )
};

export default CardDataStats;

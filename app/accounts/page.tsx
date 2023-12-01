import React from 'react';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Filter from "@/components/Filter/Filter";
import { RiAddLine, RiDoorOpenLine, RiExchangeDollarFill, RiSafe2Line } from "react-icons/ri";
import Feed from '@/components/Feed/Feed';
import CardComptes from '@/components/Cards/CardComptes';
import { Comptes } from '@/types/comptes';
import TolTipBtnIconBg from '@/components/Buttons/TolTipBtnIconBg';



const comptesData: Comptes[] = [
  {id:1, name:"CIH", sold: 0.0, rib:"123456"},
  {id:2, name:"TIJARI", sold: 100.0, rib:"1215456"},
  // Add more Comptes instances as needed
];

interface FilterOption {
  value: string;
  label: string;
  checked?: boolean;
}

interface FilterItem {
  id: string;
  name: string;
  options: FilterOption[];
}

const filters: FilterItem[] = [
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
];

const ComptesPage: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Comptes" showTitle={false} />
      <div className="rounded-sm border h-[82vh] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-between items-center mx-8 pt-10">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Comptes
          </h2>
          <TolTipBtnIconBg href={`accounts/new`} label='Nouveau Compte'>
            <RiAddLine  size={20} /> 
          </TolTipBtnIconBg>
        </div>
        <div className="text-sm ml-15 mt-3 mb-5 flex gap-8 w-full">
          <div className="flex items-center gap-2">
            <span className="font-semibold"><RiSafe2Line size={20} /></span>
            <p className="text-sm">05 Compte(s) </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold ">
              <RiExchangeDollarFill size={20} />
            </span>
            <p className="text-sm">50000 Dh</p>
          </div>
        </div>
        <Filter filters={filters} />
        <Feed>
          {comptesData.map((compte) => (
            <CardComptes key={compte.rib} data={compte}>
              <RiDoorOpenLine size={18} />
            </CardComptes>
          ))}
        </Feed>
      </div>
    </>
  );
};

export default ComptesPage;

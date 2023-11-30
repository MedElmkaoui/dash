// FormComptes.tsx
'use client'
import React, { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import { usePathname } from 'next/navigation';
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight, HiOutlinePlusCircle } from 'react-icons/hi2';
import AutocompleteSelect from '../Dropdowns/AutocompleteSelect';
import RowForm from './RowForm';
import Input from './Input';
import ModalsNewUser from '../Modals/ModalsNewUser';
import Link from 'next/link';

export type FormComptesProps = {
  type: string;
  setStep: any;
};

function FormComptes({ type , setStep }: FormComptesProps) {

  const pathname = usePathname();

  const [comptes, setComptes] = useState({
    name: '',
    sold: '',
    rib: '',
  });

  const handleSubmiting = (event: React.FormEvent) => {
    event.preventDefault();
    setStep('confirm');
    console.log(comptes);
  };

  return (
    <>
      <div className="rounded-sm lg:px-25 bg-white shadow-default dark:bg-boxdark">
        <div className="py-4 px-6.5 text-center">
          <h2 className="mb-2 font-medium text-lg text-black dark:text-white">
            {type} Compte(s) 
          </h2>
          <p className="ml-4 text-sm">Remplissez les informations requises</p>
        </div>
        <form onSubmit={handleSubmiting}>
          <div className="p-6.5">
            <RowForm modal={false}>
                <Input
                    required={true}
                    forEle="name"
                    label="Nom de compte"
                    type="text"
                    data={comptes}
                    setData={setComptes}
                    placeholder="Entrez le nom du compte"
                    row={true}
                />
                <Input
                    required={true}
                    forEle="sold"
                    label="Solde Initial"
                    type="text"
                    data={comptes}
                    setData={setComptes}
                    placeholder="Entrez le solde initial"
                    row={true}
                />
            </RowForm>
            <RowForm modal={false}>
                <Input
                    required={true}
                    forEle="rib"
                    label="RIB de compte"
                    type="text"
                    data={comptes}
                    setData={setComptes}
                    placeholder="Entrez le RIB du compte"
                    row={false}
                />
            </RowForm>

            <div className={`pt-4.5 flex justify-end`}>
              
                <button
                  type={`submit`}
                  className="flex justify-center items-center gap-2 rounded bg-primary py-3.5 px-6 text-gray"
                >
                  <span>Suivant</span>
                  <HiMiniArrowSmallRight size={22} />
                </button>
            </div>
          </div>
        </form>
      </div>

    </>
  );
}

export default FormComptes;

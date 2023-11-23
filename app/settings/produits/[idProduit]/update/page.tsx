'use client'
import React, { useState, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import { useRouter } from 'next/navigation';
import { RiHomeOfficeLine, RiCheckboxCircleLine } from 'react-icons/ri';
import FormProduit from '@/components/Forms/FormProduit';
import { HiMiniArrowSmallLeft } from 'react-icons/hi2';

const ModifierProduit = () => {
  const [step, setStep] = useState('produit');
  const router = useRouter();

  const Categories = [
    { value: '1', name: 'Catégorie A' },
    { value: '2', name: 'Catégorie B' },
    { value: '3', name: 'Catégorie C' },
    // Add more categories as needed
  ];

  const Comptes = [
    { value: '1', name: 'Compte 1' },
    { value: '2', name: 'Compte 2' },
    { value: '3', name: 'Compte 3' },
    // Add more accounts as needed
  ];

  return (
    <>
      <Breadcrumb pageName="Modifier Produit" showTitle={false} />
      <div className="overflow-hidden rounded-sm bg-white shadow-default dark:bg-boxdark">
        <div className="relative h-50 flex items-center justify-center">
          <div className="absolute bg-gray-2 dark:bg-meta-4 w-[60%] h-0.5"></div>
          <div className="absolute w-[60%] flex justify-between items-center">
            <div
              className={`h-10 w-10 flex items-center justify-center transition-all rounded-full ${
                step === 'produit' ? 'bg-primary text-white' : 'bg-gray-2 text-graydark dark:text-white dark:bg-meta-4'
              }  `}
            >
              <RiHomeOfficeLine size={15} />
            </div>
            <div
              className={`h-10 w-10 flex items-center justify-center transition-all rounded-full ${
                step === 'confirm' ? 'bg-primary text-white' : 'bg-gray-2 text-graydark dark:text-white dark:bg-meta-4'
              }  `}
            >
              <RiCheckboxCircleLine size={15} />
            </div>
          </div>
        </div>

        {/* Form Produit */}
        {step === 'produit' && <FormProduit type="Modification" setStep={setStep} step="confirm" Categories={Categories} Comptes={Comptes} />}

        {/* Form Confirm */}
        {step === 'confirm' && (
          <div className="rounded-sm px-25 bg-white shadow-default dark:bg-boxdark">
            <div className="text-center py-4 px-6.5 ">
              <div className="my-25">
                <h4 className="text-[45px] text-lg mb-4.5 font-bold text-graydark dark:text-white">Terminé avec succès !</h4>
                <p>Les informations du produit ont été mises à jour avec succès.</p>
              </div>

              <div className="flex justify-between mb-5">
                <a
                  onClick={() => {
                    setStep('produit');
                  }}
                  className="flex justify-center items-center gap-3 rounded bg-graydark dark:bg-black py-3 px-6 text-gray"
                >
                  <HiMiniArrowSmallLeft size={22} />
                  <span>Retour</span>
                </a>
                <a
                  onClick={() => {
                    setStep('');
                    router.push('/produits');
                  }}
                  className="flex justify-center rounded bg-primary py-3 px-10 text-gray"
                >
                  Confirmer
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ModifierProduit;

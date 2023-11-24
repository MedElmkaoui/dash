'use client'

import { FC, useState, useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import { useRouter } from 'next/navigation';
import { RiHomeOfficeLine, RiSafe2Line, RiCheckboxCircleLine } from 'react-icons/ri';
import ModalsNewUser from '@/components/Modals/ModalsNewUser';
import FormCharge from '@/components/Forms/FormCharge'; // Import the new form component for editing charges

interface EditChargeProps {
  idCharge: number; // You need to pass the charge ID as a prop for editing
}

const EditCharge: FC<EditChargeProps> = ({ idCharge }) => {
  const [step, setStep] = useState('caisse');
  const router = useRouter();

  return (
    <>
      <Breadcrumb pageName="Mise à Jour Charge" />
      <div className="overflow-hidden rounded-sm bg-white shadow-default dark:bg-boxdark">
        <div className="relative h-50 flex items-center justify-center">
          <div className="absolute bg-gray-2 dark:bg-meta-4 w-[60%] h-0.5"></div>
          <div className="absolute w-[60%] flex justify-between items-center">
            <div
              className={`h-10 w-10 flex items-center justify-center transition-all rounded-full ${
                step === 'caisse'
                  ? 'bg-primary text-white'
                  : ' bg-gray-2 text-graydark dark:text-white =>  dark:bg-meta-4 '
              }  `}
            >
              <RiSafe2Line size={15} />
            </div>
            <div
              className={`h-10 w-10 flex items-center justify-center transition-all rounded-full ${
                step === 'confirm'
                  ? 'bg-primary text-white'
                  : ' bg-gray-2 text-graydark dark:text-white =>  dark:bg-meta-4 '
              }  `}
            >
              <RiCheckboxCircleLine size={15} />
            </div>
          </div>
        </div>
        {/* Form Charges */}
        {step === 'caisse' && <FormCharge type="Mise à Jour" setStep={setStep}  />}
        {/* Form Confirm */}
        {step === 'confirm' && (
          <div className="rounded-sm px-25 bg-white shadow-default dark:bg-boxdark">
            <div className="text-center py-4 px-6.5">
              <div className="my-25">
                <h4 className="text-[45px] text-lg mb-4.5 font-bold text-graydark dark:text-white">
                  Terminé avec succès !
                </h4>
                <p>Les informations de la charge ont été modifiées avec succès.</p>
              </div>
              <div className="flex justify-between">
                <a
                  onClick={() => {
                    setStep('caisse');
                  }}
                  className="flex justify-center rounded bg-graydark dark:bg-body py-3 px-10 text-gray"
                >
                  Roteur
                </a>
                <a
                  onClick={() => {
                    setStep('');
                    router.push('/charges');
                  }}
                  className="flex justify-center rounded bg-primary py-3 px-10 text-gray"
                >
                  Confirm
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </>
  );
};

export default EditCharge;



'use client'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import {useRouter} from 'next/navigation'
import { useState } from 'react';
import { RiSafe2Line, RiCheckboxCircleLine} from "react-icons/ri";
import FormAlimentationCaisse from '@/components/Forms/FormAlimentationCaisse'
import { HiMiniArrowSmallLeft } from 'react-icons/hi2';



const NewAlimentationCaisse = () => {

  const [step, setStep] = useState('caisse')
  const router = useRouter();
      
  return (
    <>
      <Breadcrumb pageName="Nouvelle Alimentation Caisse"  showTitle={false} />
      <div className="overflow-hidden rounded-sm  bg-white shadow-default dark:bg-boxdark"> 
        <div className="relative h-50 flex items-center justify-center">
          <div className="absolute  bg-gray-2 dark:bg-meta-4 w-[60%] h-0.5"></div>
          <div className="absolute w-[60%] flex justify-between items-center">
            <div className={`h-10 w-10 flex items-center justify-center transition-all  rounded-full ${step==='caisse' ? 'bg-primary text-white':' bg-gray-2 text-graydark dark:text-white =>  dark:bg-meta-4 '}  `}>
                <RiSafe2Line size={15}/>
            </div>
            <div className={`h-10 w-10 flex items-center justify-center transition-all  rounded-full ${step==='confirm' ? 'bg-primary text-white':' bg-gray-2 text-graydark dark:text-white =>  dark:bg-meta-4 '}  `}>
                <RiCheckboxCircleLine size={15} />
            </div>
          </div>
        </div>
        {/* Form Caisses*/}

        {
          step === 'caisse' && (
          <FormAlimentationCaisse  type='Mise à jour'  setStep={setStep}/>
        )}
      
          {/* Form Confirm*/}

          {
          step === 'confirm' && ( 
          <div className="rounded-sm  px-25  bg-white shadow-default  dark:bg-boxdark">
            <div className="text-center py-4 px-6.5 ">
               <div className="my-25">
                  <h4 className='text-[45px] text-lg mb-4.5 font-bold text-graydark dark:text-white'>Terminé avec succès !</h4>
                  <p>Les informations de La Caisse ont été Modifier avec succès.</p>
               </div>
                <div className="flex justify-between">
                <a 
                    onClick={()=>{setStep('caisse')}}
                    className="flex  justify-center items-center gap-3 rounded bg-graydark dark:bg-black py-3  px-6  text-gray">
                    <HiMiniArrowSmallLeft size={22} />
                    <span>Roteur</span>
                  </a>
                  <a 
                    onClick={()=>{
                      setStep('')
                      router.push('/caisses')
                    }}
                    className="flex justify-center rounded bg-primary py-3 px-10  text-gray">
                    Confirm
                  </a>
                </div>
            </div>

            
        </div>
        )}


    




      </div>


    </>
  )
}

export default NewAlimentationCaisse
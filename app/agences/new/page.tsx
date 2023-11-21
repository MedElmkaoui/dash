'use client'
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import {useRouter} from 'next/navigation'
import { useState } from 'react';
import { RiHomeOfficeLine, RiSafe2Line, RiCheckboxCircleLine} from "react-icons/ri";
import ModalsNewUser from '@/components/Modals/ModalsNewUser';
import FormAgence from '@/components/Forms/FormAgence'
import FormCaisse from '@/components/Forms/FormCaisse'



const NewAgences = () => {

  

  const [step, setStep] = useState('agence')
  const router = useRouter();
  const [openModalUser, setOpenModalUser] = useState(false)

  const handleClickbtnNewUser = () => {
      setOpenModalUser(true)
  }

    const Cities = [
        { id: 1, name: "Casablanca" },
        { id: 2, name: "Marrakech" },
        { id: 3, name: "Rabat" },
        { id: 4, name: "Fez" },
        { id: 5, name: "Tangier" },
        { id: 6, name: "Agadir" },
        { id: 7, name: "Essaouira" },
        { id: 8, name: "Meknes" },
        { id: 9, name: "Oujda" },
        { id: 10, name: "Tetouan" },
        { id: 11, name: "Kenitra" },
        { id: 12, name: "Nador" },
        { id: 13, name: "Beni Mellal" },
        { id: 14, name: "El Jadida" },
        { id: 15, name: "Safi" },
        { id: 16, name: "Taza" },
        { id: 17, name: "Larache" },
        { id: 18, name: "Khouribga" },
        { id: 19, name: "Settat" },
        { id: 20, name: "Guelmim" },
        { id: 21, name: "Fquih Ben Salah" },
        { id: 22, name: "Tiznit" },
        { id: 23, name: "Errachidia" },
        { id: 24, name: "Al Hoceima" },
        { id: 25, name: "Ouarzazate" },
        { id: 26, name: "Chefchaouen" },
        { id: 27, name: "Asilah" },
        { id: 28, name: "Moulay Idriss Zerhoun" },
        { id: 29, name: "Sidi Ifni" },
        { id: 30, name: "Azrou" },
        { id: 31, name: "Dakhla" },
        { id: 32, name: "Taroudant" },
        { id: 33, name: "Ksar El Kebir" },
        { id: 34, name: "Imzouren" },
        { id: 35, name: "Sidi Yahya El Gharb" },
        // Add more cities as needed without repetition
      ];
      
  return (
    <>
      <Breadcrumb pageName="Nouvelle Agence" showTitle={false} />
      <div className="overflow-hidden rounded-sm  bg-white shadow-default dark:bg-boxdark"> 
        <div className="relative h-50 flex items-center justify-center">
          <div className="absolute  bg-gray-2 dark:bg-meta-4 w-[60%] h-0.5"></div>
          <div className="absolute w-[60%] flex justify-between items-center">
            <div className={`h-10 w-10 flex items-center justify-center transition-all rounded-full ${step==='agence' ? 'bg-primary text-white':' bg-gray-2  text-graydark dark:text-white =>  dark:bg-meta-4 '}  `}>
                <RiHomeOfficeLine size={15}/>
            </div>
            <div className={`h-10 w-10 flex items-center justify-center transition-all  rounded-full ${step==='caisse' ? 'bg-primary text-white':' bg-gray-2 text-graydark dark:text-white =>  dark:bg-meta-4 '}  `}>
                <RiSafe2Line size={15}/>
            </div>
            <div className={`h-10 w-10 flex items-center justify-center transition-all  rounded-full ${step==='confirm' ? 'bg-primary text-white':' bg-gray-2 text-graydark dark:text-white =>  dark:bg-meta-4 '}  `}>
                <RiCheckboxCircleLine size={15} />
            </div>
          </div>
        </div>

        {/* Form Agence*/}

        {
          step === 'agence' && (
          <FormAgence type='Création' setStep={setStep} step='caisse'/>
        )}

        {/* Form Caisses*/}

        {
          step === 'caisse' && (
          <FormCaisse type='Création' dropdownData={Cities} setStep={setStep} handleClickbtnNewUser={handleClickbtnNewUser}/>
        )}
      
          {/* Form Confirm*/}

          {
          step === 'confirm' && (
          <div className="rounded-sm  px-25  bg-white shadow-default  dark:bg-boxdark">
            <div className="text-center py-4 px-6.5 ">
               <div className="my-25">
                  <h4 className='text-[45px] text-lg mb-4.5 font-bold text-graydark dark:text-white'>Terminé avec succès !</h4>
                  <p>Les informations de l agence ont été ajoutées avec succès.</p>
               </div>
               

                <div className="flex justify-between">
                  <a 
                    onClick={()=>{setStep('caisse')}}
                    className="flex  justify-center rounded bg-graydark dark:bg-body py-3  px-10  text-gray">
                    Roteur
                  </a>
                  <a 
                    onClick={()=>{
                      setStep('')
                      router.push('/agences')
                    }}
                    className="flex justify-center rounded bg-primary py-3 px-10  text-gray">
                    Confirm
                  </a>
                  
                </div>
            </div>
        </div>
        )}

        {
          openModalUser && (
            <ModalsNewUser setModel={setOpenModalUser} />
          )
        }
      </div>


    </>
  )
}

export default NewAgences

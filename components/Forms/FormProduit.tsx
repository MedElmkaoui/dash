'use client'

import AutoComplet from '@/components/Dropdowns/AutoComplet'
import ButtonsPrimary from '@/components/Buttons/ButtonsPrimary'
import ModalsNewType from '@/components/Modals/ModalsNewType'
import { usePathname } from "next/navigation";

import {useState} from 'react'
import SwitcherTwo from '../Switchers/SwitcherTwo';

export type FormProduitProps ={
    type:String,
    dropdownData: Array<{
        id: number;
        name: string;
    }>,
    data:null | {
      id: number;
      name: string;
      type: string;
      in_out: string;
      accont: string;
      cost: number;
    } ,
    setData: any,
    setStep: any,
    
}

function FormProduit({type, data, setData, dropdownData, setStep}:FormProduitProps) {

  const [openModalType, setOpenModalType] = useState(false)

  const handleClickbtnNewType = () => {
    setOpenModalType(true)
  }

  const pathname = usePathname();
  return (
    <>
        <div className="rounded-sm  lg:px-25  bg-white shadow-default  dark:bg-boxdark">
            <div className=" py-4 px-6.5 text-center">
              <h2 className="mb-2 font-medium text-lg text-black dark:text-white">
                {type} Produit: {data?.name} <br />
              </h2>
              <p className='ml-4 text-sm'>
                Remplissez les informations requises 
              </p>
            </div>
            <form action="#"> 
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nom Produit <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      value={data?.name}
                      onChange={(e)=>{setData({...data, name:e.target.value})}}
                      placeholder="Entrez Le nom Caisse"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5  outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Type de Produit <span className="text-meta-1">*</span>
                      </label>
                      <div className="flex gap-3">
                        <AutoComplet data={dropdownData} placeholder="Selectionez Type Produit" selectedItem={data?.type} />
                        <ButtonsPrimary tollTip='Ajouter Type Produit' title='+'  href='#' handelClick={handleClickbtnNewType}/>
                      </div>  
                    </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Compte <span className="text-meta-1">*</span>
                      </label>
                      <div className="flex gap-3">
                        <AutoComplet data={dropdownData} placeholder="Selectionez Compte" selectedItem={data?.accont} />
                        <ButtonsPrimary tollTip='Ajouter Compte' title='+'  href='#' handelClick={()=>{}}/>
                      </div>  
                    </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                        Comission 
                      </label>
                      <input
                        type="text"
                        value={data?.cost}
                        onChange={(e)=>{setData({...data, cost:e.target.value})}}
                        defaultValue={"0.00"}
                        placeholder="Entrez le Sold Intiale"
                        className="placeholder:text-xs w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5  outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                  </div>
                </div>
                
                <div className="mb-4.5 w-full xl:w-full">
                <label className="mb-2.5 block text-black dark:text-white">
                      In / Out  
                    </label>
                    
                    <SwitcherTwo Enabled ={data?.in_out == 'In' ? true : false} /> 
                </div>
                <div className={`pt-4.5 flex justify-end`}>
                    <a 
                      onClick={()=>{setStep('confirm')}}
                      className="flex justify-center rounded bg-primary py-3 px-10   text-gray">
                      Suivant
                    </a>
                </div>
              </div>
            </form>
        </div>

        {
          openModalType && (
            <ModalsNewType setModel={setOpenModalType} />
          ) 
        }
    </>
  )
}

export default FormProduit
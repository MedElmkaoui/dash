'use client'

import Input from "./Input";
import RowForm from "./RowForm";
import {useEffect, useState} from 'react'
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import AutocompleteSelect from '@/components/Dropdowns/AutocompleteSelect'



export type FormAgenceProps ={
    type:String,
    setStep: any,
    step:string
}

function FormAgence({type, setStep, step}: FormAgenceProps) {
  
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { value: 'Casablanca' },
    { value: 'Rabat' },
    { value: 'Marrakech' },
    { value: 'Fes' },
    { value: 'Tangier' },
    { value: 'Agadir' },
    { value: 'Essaouira' },
    { value: 'Chefchaouen' },
    { value: 'Meknes' },
    { value: 'Ouarzazate' },
    { value: 'El Jadida' },
    { value: 'Tetouan' },
    { value: 'Asilah' },
    { value: 'Fez' },
    { value: 'Kenitra' },
    { value: 'Taza' },
    { value: 'Laayoune' },
    { value: 'Dakhla' },
    { value: 'Nador' },
    { value: 'Safi' },
    // Add more cities as needed
  ];

  
  const [agence, setAgence] = useState({
    name: '',
    fix: '',
    adresse: '',
    ville: '',
  })

  useEffect(() => {
    if(type=== 'Création'){
      // get the Agency From DB by IdAgence Comming from Query
      
    }
  }, [])



  const handleSubmiting = ()=>{
    if(type ==='Création'){
      console.log('creation process')
      console.log(agence)
    }else {
      console.log('Update process')
    }
  }

  return (
    <>
        <div className="rounded-sm  lg:px-25 h-1/2  bg-white shadow-default   dark:bg-boxdark">
            <div className=" py-4 px-6.5 text-center ">
              <h2 className="mb-2 text-lg font-medium text-black dark:text-white">
                {type} d une Agence:
              </h2>
              <p className='ml-4 text-sm'>
                Remplissez les informations requises pour la nouvelle agence
              </p>
            </div>
            <form action="#">
              <div className="p-6.5">
                <RowForm>
                    <Input forEle='name' label="Nom d'agnece" type="text" data={agence}  setData={setAgence} placeholder="Entrez Nom d'agence" value={agence?.name} row={true} ></Input>
                    <Input forEle='fix' label="Fix d'agnece" type="text" data={agence} setData={setAgence} placeholder="Entrez Fix d'agence" value={agence?.fix} row={true} ></Input>
                </RowForm>
                <RowForm>
                    <Input forEle='adresse' label="Adresse d'agnece" type="text" data={agence}  setData={setAgence} placeholder="Entrez l'adresse d'agence" value={agence?.adresse} row={true} ></Input>
                    {/*<Input forEle='ville' label="Ville d'agnece" type="text" data={agence}  setData={setAgence} placeholder="Entrez Ville d'agence" value={agence?.ville} row={true} ></Input>*/}
                    <AutocompleteSelect data={cities} label="Ville d'agence" placeholder="Sélectionez la ville de l'agence" onSelect={setSelectedCity} />
                </RowForm>

                <div className="pt-4.5 flex justify-end">
                  <button 
                    onClick={()=>{
                      setStep(step) 
                      handleSubmiting()
                    }}
                    className="flex justify-center items-end  rounded bg-primary py-3.5 px-6 text-gray">
                    <span>Suivant</span>
                    <HiMiniArrowSmallRight size={22} /> 
                  </button>
                </div>
              </div>
            </form>
        </div>
    </>
  )
}

export default FormAgence
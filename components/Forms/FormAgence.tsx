'use client'

import Input from "./Input";
import RowForm from "./RowForm";
import {useEffect, useState} from 'react'
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import AutocompleteSelect from '@/components/Dropdowns/AutocompleteSelect'
import Agences from "@/app/agences/page";



export type FormAgenceProps ={
    type:String,
    setStep: any,
    step:string
}

function FormAgence({type, setStep, step}: FormAgenceProps) {
  
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { value: 'casablanca', name: 'Casablanca' },
    { value: 'rabat', name: 'Rabat' },
    { value: 'marrakech', name: 'Marrakech' },
    { value: 'fes', name: 'Fes' },
    { value: 'tangier', name: 'Tangier' },
    { value: 'agadir', name: 'Agadir' },
    { value: 'essaouira', name: 'Essaouira' },
    { value: 'chefchaouen', name: 'Chefchaouen' },
    { value: 'meknes', name: 'Meknes' },
    { value: 'ouarzazate', name: 'Ouarzazate' },
    { value: 'eljadida', name: 'El Jadida' },
    { value: 'tetouan', name: 'Tetouan' },
    { value: 'asilah', name: 'Asilah' },
    { value: 'fez', name: 'Fez' },
    { value: 'kenitra', name: 'Kenitra' },
    { value: 'taza', name: 'Taza' },
    { value: 'laayoune', name: 'Laayoune' },
    { value: 'dakhla', name: 'Dakhla' },
    { value: 'nador', name: 'Nador' },
    { value: 'safi', name: 'Safi' },
    // Add more cities as needed
  ];
  

  
  const [agence, setAgence] = useState({
    name: '',
    fix: '',
    adresse: '',
    ville:''
  })

  useEffect(() => {
    if(type=== 'Création'){
      // get the Agency From DB by IdAgence Comming from Query
      
    }
  }, [])

  useEffect(() => {
    setAgence({...agence, ville: selectedCity? selectedCity : ''});
  }, [selectedCity])



  const handleSubmiting = (event: React.FormEvent) => {
    event.preventDefault(); 
    setStep(step);
    console.log(agence);
  }

  return (
    <>
        <div className="rounded-sm  lg:px-25 bg-white shadow-default   dark:bg-boxdark">
            <div className=" py-4 px-6.5 text-center ">
              <h2 className="mb-2 text-lg font-medium text-black dark:text-white">
                {type} d une Agence:
              </h2>
              <p className='ml-4 text-sm'>
                Remplissez les informations requises pour la nouvelle agence
              </p>
            </div>
            <form onSubmit={handleSubmiting}>
              <div className="p-6.5">
                <RowForm  modal={false}>
                    <Input forEle='name' label="Nom d'agnece" type="text" data={agence}  setData={setAgence} placeholder="Entrez Nom d'agence" value={agence?.name} row={true} ></Input>
                    <Input forEle='fix' label="Fix d'agnece" type="text" data={agence} setData={setAgence} placeholder="Entrez Fix d'agence" value={agence?.fix} row={true} ></Input>
                </RowForm>
                <RowForm  modal={false}>
                    <Input forEle='adresse' label="Adresse d'agnece" type="text" data={agence}  setData={setAgence} placeholder="Entrez l'adresse d'agence" value={agence?.adresse} row={true} ></Input>
                    <AutocompleteSelect data={cities} label="Ville d'agence" placeholder="Sélectionez la ville de l'agence" value={agence?.ville} onSelect={setSelectedCity} row={false}/>
                </RowForm>

                <div className="pt-4.5 flex justify-end">
                  <button 
                    type="submit"
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
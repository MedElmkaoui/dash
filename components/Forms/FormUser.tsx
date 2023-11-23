

import { data } from 'autoprefixer';
import DropdownSimple from '../Dropdowns/DropdownSimple'
import RowForm from './RowForm';
import Input from './Input';
import AutocompleteSelect from '@/components/Dropdowns/AutocompleteSelect';
import { useEffect, useState } from 'react';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';

export type FormUserProps = {
  setModal : (valeu:boolean)=>void,
  type: string
}



function FormUser({type, setModal}:FormUserProps) {

  const userTypes = [
    {value: 'user', name:'User'}, 
    {value: 'admin', name:'Admin'}
  ]

  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [user, setUser] = useState({
    name:'',
    email:'',
    type:'',
    password:''
  })

  useEffect(()=>{
    setUser({...user, type: selectedType? selectedType : '',})

  }, [selectedType])

  const handleSubmiting = (event: React.FormEvent)=>{
      event.preventDefault();
      setModal(false)
      console.log(user)
  }

  return (
    <>
        {/* <!-- Sign In Form --> */}
        <div className="rounded-sm ">
            <div className="py-4 ">
              <h3 className="font-medium text-black dark:text-white">
                    {type} dutilisateur
              </h3>
              <p className="text-sm">
                Renseignez les informations nécessaires pour linscription
              </p>
            </div>
            <form action="#" onSubmit={handleSubmiting}>
              <div className="p-3">
                <RowForm  modal={true}>
                  <Input forEle='name' data={user} setData={setUser} label="Nom d'utilisateur" type='text' placeholder="Entrez le nom d'utilisateur" row={false}  />
                  <Input forEle='email' data={user} setData={setUser}  label="Email" type='text' placeholder="Entrez l'email" row={false}  />
                </RowForm>
                <RowForm modal={true} >
                    <AutocompleteSelect label="Type d'utilisateur" onSelect={setSelectedType} data={userTypes} placeholder='Selectionez type User' row={true} value={'User'} />
                    <Input forEle='password' data={user} setData={setUser}  label="Mot de passe" type='password' placeholder="Entrez le mot de passe" row={false}  />

                </RowForm>
                

               <div className="flex justify-end gap-6">
                  <button 
                    onClick={()=>{setModal(false)}}
                    className="mt-5 flex py-3.5 px-5 justify-center rounded-md bg-black text-gray"
                  > 
                      Annuler
                  </button>
                  <button 
                    type='submit' 
                    className="mt-5 flex py-3.5 px-5 justify-center rounded-md bg-primary text-gray"
                  > 
                      Enregestrez
                  </button>
               </div>

                
              </div>
            </form>
          </div>
    </>
  )
}

export default FormUser
'use client'


import { useState, useEffect } from 'react';
import RowForm from './RowForm';
import Input from './Input';
import Select from './Select';
import {  HiMiniArrowSmallRight } from 'react-icons/hi2';
import { User } from '@/types/user';


export type FormUtilisateurProps = {
  type: string;
  data?: User | null;
  setStep: any;
};

const isAdminOptions = [
  {
    value: false,
    label: 'User',
  },
  {
    value: true,
    label: 'Admin',
  },
];

function FormUtilisateur({ type, setStep, data }: FormUtilisateurProps) {

  
  const [utilisateur, setUtilisateur] = useState<User| null | undefined>(null);

  

  useEffect(() => {
    setUtilisateur(data);
  }, [data]);

 

  const handleSubmiting = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior
    if(type==='Création'){
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(utilisateur)
      };

      fetch('http://localhost:3000/api/user', options)
        .then(response => response.json())

      setStep('confirm');
    }else if(type === "Modification"){
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(utilisateur)
      };

      fetch('http://localhost:3000/api/user', options)
        .then(response => response.json())

      setStep('confirm');
    }
  };

  return (
    <>
      <div className="rounded-sm lg:px-25 bg-white shadow-default dark:bg-boxdark">
        <div className="py-4 px-6.5 text-center">
          <h2 className="mb-2 font-medium text-lg text-black dark:text-white">{type} Utilisateur(s)</h2>
          <p className="ml-4 text-sm">Remplissez les informations requises</p>
        </div>
        <form onSubmit={handleSubmiting}>
          <div className="p-6.5">
            <RowForm modal={false}>
              <Input required={true} forEle="username" label="Nom d'utilisateur" type="text" value={utilisateur?.username} data={utilisateur} setData={setUtilisateur} placeholder="Entrez le prénom" row={true}></Input>
              <Input required={true} forEle="email" label="Email" type="email" value={utilisateur?.email} data={utilisateur} setData={setUtilisateur} placeholder="Entrez le nom" row={true}></Input>
            </RowForm>
            <RowForm modal={false}>
              <Input required={true} forEle="password" label="Mot de passe" type="password" value={utilisateur?.password} data={utilisateur} setData={setUtilisateur} placeholder="Entrez l'adresse" row={true}></Input>
              <Select required={true} options={isAdminOptions} forEle="isAdmin" label="Admin" value={utilisateur?.isAdmin}  data={utilisateur} setData={setUtilisateur}  row={true} />
            </RowForm>

           

            <div className={`pt-4.5 flex justify-end`}>
              <div className="flex gap-3">
                <button
                  type={`submit`}
                  className="flex justify-center items-center gap-2 rounded bg-primary py-3.5 px-6 text-gray"
                >
                  <span>Suivant</span>
                  <HiMiniArrowSmallRight size={22} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      
    </>
  );
}

export default FormUtilisateur;

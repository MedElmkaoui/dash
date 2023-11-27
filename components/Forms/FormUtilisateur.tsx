'use client'
import { useState, useEffect } from 'react';
import RowForm from './RowForm';
import Input from './Input';
import ModalsNewUser from '../Modals/ModalsNewUser';
import {  HiMiniArrowSmallRight } from 'react-icons/hi2';
import { usePathname } from 'next/navigation';

export type FormUtilisateurProps = {
  type: string;
  setStep: any;
};

function FormUtilisateur({ type, setStep }: FormUtilisateurProps) {

  const pathname = usePathname();

  const [utilisateur, setUtilisateur] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    adr: '',
    salary: '',
    cin: '',
    dateinscription: '',
  });

 

  const handleSubmiting = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setStep('confirm');
    console.log(utilisateur);
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
              <Input forEle="firstName" label="Prénom" type="text" data={utilisateur} setData={setUtilisateur} placeholder="Entrez le prénom" row={true}></Input>
              <Input forEle="lastName" label="Nom" type="text" data={utilisateur} setData={setUtilisateur} placeholder="Entrez le nom" row={true}></Input>
            </RowForm>

            <RowForm modal={false}>
              <Input forEle="email" label="Email" type="email" data={utilisateur} setData={setUtilisateur} placeholder="Entrez l'email" row={true}></Input>
              <Input forEle="phone" label="Téléphone" type="tel" data={utilisateur} setData={setUtilisateur} placeholder="Entrez le téléphone" row={true}></Input>
            </RowForm>

            <RowForm modal={false}>
              <Input forEle="adr" label="Adresse" type="text" data={utilisateur} setData={setUtilisateur} placeholder="Entrez l'adresse" row={true}></Input>
              <Input forEle="salary" label="Salaire" type="number" data={utilisateur} setData={setUtilisateur} placeholder="Entrez le salaire" row={true}></Input>
            </RowForm>

            <RowForm modal={false}>
              <Input forEle="cin" label="CIN" type="text" data={utilisateur} setData={setUtilisateur} placeholder="Entrez le CIN" row={true}></Input>
              <Input forEle="dateinscription" label="Date d'inscription" type="date" data={utilisateur} setData={setUtilisateur} placeholder="Entrez la date d'inscription" row={true}></Input>
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

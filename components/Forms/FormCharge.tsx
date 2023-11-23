'use client'
import React, { useState } from 'react';
import Input from './Input';
import RowForm from './RowForm';
import { HiMiniArrowSmallRight } from 'react-icons/hi2';

interface FormChargeProps {
  type: string;
}

const FormCharge: React.FC<FormChargeProps> = ({ type }) => {
  const [charge, setCharge] = useState({
    iduser: 1,
    date: '2023-11-23',
    montant: 0,
    type: 'Alimentation',
    idCaisses: 1,
    justif: null,
    note: '',
  });

  const handleSubmiting = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(charge);
    // Add logic to submit the form data
  };

  return (
    <>
      <div className="rounded-sm lg:px-25 bg-white shadow-default dark:bg-boxdark">
        <div className="py-4 px-6.5 text-center ">
          <h2 className="mb-2 text-lg font-medium text-black dark:text-white">{type} d{"'"}une Charge :</h2>
          <p className="ml-4 text-sm">Remplissez les informations requises pour la nouvelle charge</p>
        </div>
        <form onSubmit={handleSubmiting}>
          <div className="p-6.5">
            <RowForm modal={false}>
              <Input
                forEle="date"
                label="Date de la charge"
                type="date"
                data={charge}
                setData={setCharge}
                placeholder="Sélectionnez la date de la charge"
                value={charge?.date}
                row={true}
              />
              <Input
                forEle="montant"
                label="Montant de la charge"
                type="number"
                data={charge}
                setData={setCharge}
                placeholder="Entrez le montant de la charge"
                value={charge?.montant}
                row={true}
              />
            </RowForm>
            <RowForm modal={false}>
              <Input
                forEle="type"
                label="Type de la charge"
                type="text"
                data={charge}
                setData={setCharge}
                placeholder="Entrez le type de la charge"
                value={charge?.type}
                row={true}
              />
              <Input
                forEle="idCaisses"
                label="ID de la caisse"
                type="number"
                data={charge}
                setData={setCharge}
                placeholder="Entrez l'ID de la caisse"
                value={charge?.idCaisses}
                row={true}
              />
            </RowForm>
            <RowForm modal={false}>
              {/*<FileUpload label="Justificatif" data={charge} setData={setCharge} accept=".pdf" />*/}
              <Input
                forEle="note"
                label="Note"
                type="text"
                data={charge}
                setData={setCharge}
                placeholder="Ajoutez une note (optionnel)"
                value={charge?.note}
                row={true}
              />
            </RowForm>
            <div className="pt-4.5 flex justify-end">
              <button
                type="submit"
                className="flex justify-center items-end  rounded bg-primary py-3.5 px-6 text-gray"
              >
                <span>Suivant</span>
                <HiMiniArrowSmallRight size={22} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCharge;

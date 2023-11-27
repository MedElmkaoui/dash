// FormProduit.tsx
import React, { useState, useEffect } from 'react';
import Input from './Input';
import RowForm from './RowForm';
import { HiMiniArrowSmallRight, HiOutlinePlusCircle } from 'react-icons/hi2';
import AutocompleteSelect from '@/components/Dropdowns/AutocompleteSelect';
import ModalsNewType from '@/components/Modals/ModalsNewType';
import Link from 'next/link';

interface FormProduitProps {
  type: string;
  setStep: any;
  step: string;
  Categories: { value: string; name: string }[];
  Comptes: { value: string; name: string }[];
}

const FormProduit: React.FC<FormProduitProps> = ({ type, setStep, step, Categories, Comptes }) => {
  const [openModalType, setOpenModalType] = useState(false)
  const [produit, setProduit] = useState({
    name: '',
    idCat: '',
    idAccount: '',
    in_out: '',
    cost: 0.0,
  });

  useEffect(() => {
    if (type === 'Création') {
      // Fetch product data by ID if needed
    }
  }, []);

  const handleSubmiting = (event: React.FormEvent) => {
    event.preventDefault();
    setStep(step);
    console.log(produit);
  };

  return (
    <>
      <div className="rounded-sm lg:px-25 bg-white shadow-default dark:bg-boxdark">
        <div className="py-4 px-6.5 text-center ">
          <h2 className="mb-2 text-lg font-medium text-black dark:text-white">{type} d{"'"}un Produit :</h2>
          <p className="ml-4 text-sm">Remplissez les informations requises pour le nouveau produit</p>
        </div>
        <form onSubmit={handleSubmiting}>
          <div className="p-6.5">
            <RowForm modal={false}>
              <Input
                forEle="name"
                label="Nom du produit"
                type="text"
                data={produit}
                setData={setProduit}
                placeholder="Entrez le nom du produit"
                value={produit?.name}
                row={true}
              />
              <div className="flex w-full xl:w-1/2 gap-2 justify-between items-end">
                <AutocompleteSelect
                  data={Categories}
                  label="Catégorie du produit"
                  placeholder="Sélectionnez la catégorie du produit"
                  value={produit?.idCat}
                  onSelect={() => {}}
                  row={true}
                />
                <button
                  onClick={()=>{setOpenModalType(true)}}
                  type="button" // Set the type to "button" to prevent form submission
                  className="flex justify-center items-center gap-2 rounded bg-primary py-3.5 px-6 text-gray"
                >
                  <HiOutlinePlusCircle size={22} />
                </button>
              </div>
              
            </RowForm>
            <RowForm modal={false}>
              <div className="flex w-full xl:w-1/2 gap-2 justify-between items-end">
                  <AutocompleteSelect
                    data={Comptes}
                    label="Compte associé"
                    placeholder="Sélectionnez le compte associé au produit"
                    value={produit?.idAccount}
                    onSelect={() => {}}
                    row={true}
                  />
                  <Link
                    href='/account/new'
                    className="flex justify-center items-center gap-2 rounded bg-primary py-3.5 px-6 text-gray"
                  >
                    <HiOutlinePlusCircle size={22} />
                  </Link>
              </div>
              
              <Input
                forEle="in_out"
                label="Type (Entrée/Sortie)"
                type="text"
                data={produit}
                setData={setProduit}
                placeholder="Entrez le type du produit"
                value={produit?.in_out}
                row={true}
              />
            </RowForm>
            <RowForm modal={false}>
              <Input
                forEle="cost"
                label="Coût du produit"
                type="number"
                data={produit}
                setData={setProduit}
                placeholder="Entrez le coût du produit"
                value={produit?.cost}
                row={false}
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

        {openModalType && (
          <ModalsNewType setModel={setOpenModalType} />
        )}
      </div>
    </>
  );
};

export default FormProduit;

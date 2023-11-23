// FormProduit.tsx
import React, { useState, useEffect } from 'react';
import Input from './Input';
import RowForm from './RowForm';
import { HiMiniArrowSmallRight } from 'react-icons/hi2';
import AutocompleteSelect from '@/components/Dropdowns/AutocompleteSelect';

interface FormProduitProps {
  type: string;
  setStep: any;
  step: string;
  Categories: { value: string; name: string }[];
  Comptes: { value: string; name: string }[];
}

const FormProduit: React.FC<FormProduitProps> = ({ type, setStep, step, Categories, Comptes }) => {
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
              <AutocompleteSelect
                data={Categories}
                label="Catégorie du produit"
                placeholder="Sélectionnez la catégorie du produit"
                value={produit?.idCat}
                onSelect={() => {}}
                row={false}
              />
            </RowForm>
            <RowForm modal={false}>
              <AutocompleteSelect
                data={Comptes}
                label="Compte associé"
                placeholder="Sélectionnez le compte associé au produit"
                value={produit?.idAccount}
                onSelect={() => {}}
                row={false}
              />
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
      </div>
    </>
  );
};

export default FormProduit;

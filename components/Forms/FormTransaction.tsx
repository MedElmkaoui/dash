'use client'

import { useState } from "react";



export type FormTransactionProps = {
  setModal : (valeu:boolean)=>void,
  type: string
}



function FormTransaction({type, setModal}:FormTransactionProps) {

  const [operation, setOperation] = useState({
    montant:'',
  })
  const handleSubmiting = (event:React.FormEvent)=>{
    event.preventDefault();
    setModal(false)
    console.log(operation)
  }
  
  return (
    <>
        <div className="rounded-sm ">
            <div className="py-4 ">
              <h3 className="font-medium text-black dark:text-white">
                    {type} Transaction
              </h3>
              <p className="text-sm">
                Renseignez les informations nécessaires 
              </p>
            </div>
            <form onSubmit={handleSubmiting}>
              <div className="p-3">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Montant
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      value={operation?.montant}
                      onChange={(e)=>setOperation({...operation, montant: e.target.value})}
                      placeholder="Entrez Type Produit"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-light  outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                <button 
                  type='submit'
                  className="mt-5 flex w-full justify-center rounded-md bg-primary p-3 font-medium text-gray">
                    Enregestrez
                </button>
              </div>
            </form>
          </div>
    </>
  )
}

export default FormTransaction
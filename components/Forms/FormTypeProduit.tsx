

import DropdownSimple from '../Dropdowns/DropdownSimple'

export type FormTypeProduitProps = {
  setModal : (valeu:boolean)=>void,
  data: {
    name:string,
  },
  setData: (valeu:any)=>void,
  type: string
}



function FormTypeProduit({type, data, setData,  setModal}:FormTypeProduitProps) {

  const handleSubmiting = (event:React.FormEvent)=>{
    event.preventDefault();
    setModal(false)
    console.log(data)
  }
  
  return (
    <>
        <div className="rounded-sm ">
            <div className="py-4 ">
              <h3 className="font-medium text-black dark:text-white">
                    {type} Type Produit
              </h3>
              <p className="text-sm">
                Renseignez les informations nécessaires 
              </p>
            </div>
            <form onSubmit={handleSubmiting}>
              <div className="p-3">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Type De Produit
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={data?.name}
                      onChange={(e)=>setData({...data, name: e.target.value})}
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

export default FormTypeProduit

import { usePathname } from "next/navigation";

export type FormCaisseProps ={
    type:String,
    
    setStep: any,
    
}

function FormCaisse({type, setStep}:FormCaisseProps) {

  const pathname = usePathname();
  return (
    <>
        <div className="rounded-sm  lg:px-25  bg-white shadow-default  dark:bg-boxdark">
            <div className=" py-4 px-6.5 text-center">
              <h2 className="mb-2 font-medium text-lg text-black dark:text-white">
                {type} Alimentation Caisse (s) <br />
                
              </h2>
              <p className='ml-4 text-sm'>
                Remplissez les informations requises 
              </p>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nom de caisse <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Entrez Le nom Caisse"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5  outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        L utilisateur En Charge <span className="text-meta-1">*</span>
                      </label>
                      <div className="flex gap-3">
                       
                      </div>  
                    </div>
                </div>
              {
                pathname.includes('caisses') && (
                  <div className="mb-4.5 w-full xl:w-full">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Agence 
                    </label>
                    
                </div>
                )
              }
                <div className="mb-4.5 w-full xl:w-full">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Solde Intiale 
                    </label>
                    <input
                      type="text"
                      defaultValue={"0.00"}
                      placeholder="Entrez le Sold Intiale"
                      className="placeholder:text-xs w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5  outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                </div>
                <div className={`pt-4.5 flex justify-end`}>
                 
                  <div className="flex gap-3">
                    <a 
                      onClick={()=>{setStep('confirm')}}
                      className="flex justify-center rounded bg-primary py-3 px-10   text-gray">
                      Suivant
                    </a>
                  </div>
                </div>
              </div>
            </form>
        </div>
    </>
  )
}

export default FormCaisse
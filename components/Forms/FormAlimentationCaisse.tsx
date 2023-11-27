'use client'
import { usePathname } from "next/navigation";
import RowForm from '@/components/Forms/RowForm'
import Select from "./Select";
import  Input  from "./Input";
import AutocompleteSelect from "../Dropdowns/AutocompleteSelect";
import ModalsNewUser from "@/components/Modals/ModalsNewUser";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { useEffect, useState } from "react";
import Link from "next/link";

export type FormCaisseProps ={
    type:String,
    setStep: any,   
}


const AlimentationTypes = [
  {value: 'CTC', label: 'CTC'},
  {value: 'ATC', label: 'ATC'},
  {value: 'ETC', label: 'ETC'}
]

function FormCaisse({type, setStep}:FormCaisseProps) {

  const pathname = usePathname();
  const [selectedUserEmiteur, setSelectedUserEmiteur] = useState<number | null>(null);
  const [selectedUserRecipteur, setSelectedUserRecipteur] = useState<number | null>(null);
  const [selectedCompte, setSelectedCompte] = useState<number | null>(null);
  
  const [openModalUser, setopenModalUser] = useState<boolean>(false);
  const [users, setUsers] = useState([{
    value : '',
    name : '',
  }]);
  const [comptes, setCompte] = useState([{
    value : '',
    name : '',
  }]);

  const [alimentation, setAlimentation] = useState({
    id: '',
    idUserEmiteur: 0,
    idUserReciver: 0,
    type: 'CTC',
    montant: 2510,
    idAccount: 0,
    justification: 'text',
  })
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
    
        const transformedArray = await users.map((ele:any) => ({
          value: ele.id.toString(), 
          name: ele.username,
        }));
        setUsers(transformedArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])


  const handleSubmiting = (event: React.FormEvent)=>{
    event.preventDefault();
    console.log(alimentation)
  }

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
            <form onSubmit={handleSubmiting}>
              <div className="p-6.5">
                <RowForm modal={false} >
                  <Select forEle='type' options={AlimentationTypes} label='Type Alimentation' row={true} data={alimentation} setData={setAlimentation}  />
                  <Input forEle="montant" type="number" label="Montant" placeholder="Entrez Montant" row={true} data={alimentation} setData={setAlimentation}  />
                </RowForm>
                <RowForm modal={false} >
                  { alimentation.type === 'CTC' && (<div className="flex w-full xl:w-1/2 gap-2 justify-between items-end">
                      <AutocompleteSelect row={true} data={users} label="L'utilisateur Emiteur" placeholder="Sélectionez l'utilisateur"  onSelect={setSelectedUserEmiteur} />
                      <button
                        onClick={()=>{setopenModalUser(true)}}
                        className="flex justify-center items-center gap-2 rounded bg-primary py-3.5 px-6 text-gray"
                      >
                        <HiOutlinePlusCircle size={22} />
                      </button>
                  </div>)}
                  { alimentation.type == "ATC" && (<div className="flex w-full xl:w-1/2 gap-2 justify-between items-end">
                    <AutocompleteSelect row={true} data={comptes} label="Compte Emiteur" placeholder="Sélectionez Compte"  onSelect={setSelectedCompte} />
                    <Link
                      href={'/account/new'}
                      className="flex justify-center items-center gap-2 rounded bg-primary py-3.5 px-6 text-gray"
                    >
                      <HiOutlinePlusCircle size={22} />
                    </Link>
                  </div>)}
                  <div className="flex w-full xl:w-1/2 gap-2 justify-between items-end">
                      <AutocompleteSelect row={true} data={users} label="L'utilisateur Recipteur" placeholder="Sélectionez l'utilisateur"  onSelect={setSelectedUserRecipteur} />
                      <button
                        onClick={()=>{setopenModalUser(true)}}
                        className="flex justify-center items-center gap-2 rounded bg-primary py-3.5 px-6 text-gray"
                      >
                        <HiOutlinePlusCircle size={22} />
                      </button>
                  </div>
                </RowForm>
                
                

                <Input forEle="montant" type="file" label="Justificatife" data={alimentation} setData={setAlimentation}  placeholder="" row={false} />

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

            {
          openModalUser && (
            <ModalsNewUser setModel={setopenModalUser} />
          )
        }

        </div>
    </>
  )
}

export default FormCaisse
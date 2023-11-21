'use client'
import { usePathname } from "next/navigation";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight, HiOutlinePlusCircle } from "react-icons/hi2";
import AutocompleteSelect from "../Dropdowns/AutocompleteSelect";
import { useEffect, useState } from "react";
import RowForm from "./RowForm";
import Input from "./Input";


export type FormCaisseProps ={
    type:String,
    dropdownData: Array<{
        id: number;
        name: string;
    }>,
    setStep: any,
    handleClickbtnNewUser: any
    
}

function FormCaisse({type, setStep, handleClickbtnNewUser}:FormCaisseProps) {

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedAgence, setSelectedAgence] = useState(null);
  const pathname = usePathname();
  const [users, setUsers] = useState([{
    value : '',
    name : '',
  }])

  const [agences, setAgences] = useState([{
    value : '',
    name : '',
  }])

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
    
    // Call the function to fetch and transform data
    fetchData();
  
  }, [])
  
  
  return (
    <>
        <div className="rounded-sm  lg:px-25  bg-white shadow-default  dark:bg-boxdark">
            <div className=" py-4 px-6.5 text-center">
              <h2 className="mb-2 font-medium text-lg text-black dark:text-white">
                {type} Caisse (s) <br />
                {pathname.includes('agences') && (<span className='text-xs'>Pour l'agence : Ag-21/5241</span>)}
              </h2>
              <p className='ml-4 text-sm'>
                Remplissez les informations requises 
              </p>
            </div>
            <form action="#">
              <div className="p-6.5">
              <RowForm>
                    <Input forEle='sold' label="Nom de caisse" type="text"  placeholder="Entrez nom caisses" value={''} row={true} ></Input>
                    <AutocompleteSelect data={users} label="L'utilisateur en charge" placeholder="Sélectionez l'utilisateur" value={''} onSelect={setSelectedUser} />
              </RowForm>
              
              <RowForm>
                <Input forEle='sold' label="Sold Initial" type="text"  placeholder="Entrez sold initial" value={''} row={pathname.includes('caisse') && true } ></Input>
                {pathname.includes('caisses') && (
                  <AutocompleteSelect data={users} label="L'agence" placeholder="Sélectionez l'agence" value={''} onSelect={setSelectedAgence} />
                )}
                
              </RowForm>


              <div className={`pt-4.5 flex ${ pathname.includes('agences') ? 'justify-between':'justify-end' }`}>
                  { pathname.includes('agences') && (
                      <a 
                        onClick={()=>{setStep('agence')}}
                        className="flex  justify-center items-center gap-2 rounded bg-graydark dark:bg-black py-3  px-6 text-gray">
                          <HiMiniArrowSmallLeft size={22} />
                          <span>Roteur</span>
                      </a>
                  )}
                  <div className="flex gap-3">
                   { pathname.includes('agences')  && (
                      <a 
                        onClick={()=>{}}
                        className="flex justify-center items-center gap-2 rounded bg-primary py-3 px-6   text-gray">
                        <HiOutlinePlusCircle  size={22} />
                        Ajouter
                      </a>)
                    }
                    <button 
                    onClick={()=>{
                      setStep('confirm') 
                    }}
                    className="flex justify-center items-center gap-2 rounded bg-primary py-3.5 px-6 text-gray">
                    <span>Suivant</span>
                    <HiMiniArrowSmallRight size={22} /> 
                  </button>
                  </div>
                </div>
              </div>
            </form>
        </div>
    </>
  )
}

export default FormCaisse
'use client'
import { usePathname } from "next/navigation";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight, HiOutlinePlusCircle } from "react-icons/hi2";
import AutocompleteSelect from "../Dropdowns/AutocompleteSelect";
import { useEffect, useState } from "react";
import RowForm from "./RowForm";
import Input from "./Input";


export type FormCaisseProps ={
    type:String,
    idAg?: number;
    dropdownData: Array<{
        id: number;
        name: string;
    }>,
    setStep: any,
    handleClickbtnNewUser: any
    
}

function FormCaisse({type, idAg, setStep}:FormCaisseProps) {

  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [selectedAgence, setSelectedAgence] = useState<number | null>(null);
  const pathname = usePathname();
  const [users, setUsers] = useState([{
    value : '',
    name : '',
  }]);

  const [agences, setAgences] = useState([{
    value : '',
    name : '',
  }]);

  const [caisses, setCaisses] = useState({
    name: '',
    sold: '',
    idAg: 0 as number|null,
    idUser: 0 as number|null,
  });


  useEffect(() => {
    if(idAg){
      setSelectedAgence(idAg)
    }
    setCaisses({
      ...caisses,
      idAg:  selectedAgence ? selectedAgence : null,
      idUser:  selectedUser ? selectedUser : null,
    });
  }, [selectedAgence, selectedUser]);
  

  

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
  
  

  const handleSubmiting = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior
    if(!pathname.includes('agences')){
      setStep('confirm');
    }
    console.log(caisses);
  }
    
  return (
    <>
        <div className="rounded-sm  lg:px-25  bg-white shadow-default  dark:bg-boxdark">
            <div className=" py-4 px-6.5 text-center">
              <h2 className="mb-2 font-medium text-lg text-black dark:text-white">
                {type} Caisse (s) <br />
                {pathname.includes('agences') && (<span className='text-xs'>Pour lagence : Ag-21/5241</span>)}
              </h2>
              <p className='ml-4 text-sm'>
                Remplissez les informations requises 
              </p>
            </div>
            <form onSubmit={handleSubmiting}>
              <div className="p-6.5">
              <RowForm>
                    <Input forEle='name' label="Nom de caisse" type="text" data={caisses} setData={setCaisses}  placeholder="Entrez nom caisses"  row={true} ></Input>
                    <AutocompleteSelect data={users} label="L'utilisateur en charge" placeholder="Sélectionez l'utilisateur"  onSelect={setSelectedUser} />
              </RowForm>
              
              <RowForm>
                {pathname.includes('caisses') && (
                  <AutocompleteSelect data={users} label="L'agence" placeholder="Sélectionez l'agence"  onSelect={setSelectedAgence} />
                )}
                <Input forEle='sold' label="Sold Initial" type="text" data={caisses} setData={setCaisses}  placeholder="Entrez sold initial"  row={pathname.includes('caisse') && true } ></Input> 
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
                      <button type="submit" 
                        className="flex justify-center items-center gap-2 rounded bg-primary py-3 px-6   text-gray">
                        <HiOutlinePlusCircle  size={22} />
                        Ajouter
                      </button>)
                    }
                    <button
                      onClick={() => setStep('confirm')}
                      type={`${pathname.includes('/agences') ? 'button': 'submit'}`}
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
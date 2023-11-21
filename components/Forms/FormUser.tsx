

import DropdownSimple from '../Dropdowns/DropdownSimple'

export type FormUserProps = {
  setModal : (valeu:boolean)=>void,
  data: {
    name:string,
    email:string,
    type:string,
    password:string,
  },
  setData : (valeu:any)=>void,
  type: string
}

function FormUser({type, data, setData,  setModal}:FormUserProps) {
  return (
    <>
        {/* <!-- Sign In Form --> */}
        <div className="rounded-sm ">
            <div className="py-4 ">
              <h3 className="font-medium text-black dark:text-white">
                    {type} d utilisateur
              </h3>
              <p className="text-sm">
                Renseignez les informations nécessaires pour linscription
              </p>
            </div>
            <form action="#">
              <div className="p-3">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Nom d utilisateur
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e)=>setData({...data, name: e.target.value})}
                      placeholder="Entrez Le Nom D'Utilisateur"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-light  outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="email"
                      onChange={(e)=>setData({...data, email: e.target.value})}
                      value={data.email}
                      placeholder="Entrez L'Email d'Utilisateur"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-light  outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Type d utilisateur
                  </label>

                  <DropdownSimple options={['Admin', 'User']} select={data.type} />

                  {/*<AutoComplet data={[{id:1, name:'Admin'}, {id:2, name:'User'}]} placeholder="Sélectionez Type D'utilisateur" />*/}
                </div>

                <div>
                  <label className="mb-2.5 block text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e)=>setData({...data, password: e.target.value})}
                    placeholder="Entrez Le Mot De Passe"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-light  outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <button onClick={()=>{setModal(false)}} className="mt-5 flex w-full justify-center rounded-md bg-primary p-3 font-medium text-gray">
                    Enregestrez
                </button>
              </div>
            </form>
          </div>
    </>
  )
}

export default FormUser
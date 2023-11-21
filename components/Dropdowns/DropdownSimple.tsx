

export type DropProps = {
  select:string,
  options: string[]
}

function DropdownSimple({select, options}:DropProps) {

    
  return (
    <>
        <div>
                
                
                  
                  <select 
                    className="relative z-20 w-full font-light appearance-none rounded border border-stroke bg-transparent py-3 px-4 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
                    value={select}
                  >
                    {
                        options.map((ele)=>{ return (
                          <option key={ele} value={ele}>
                          {ele}
                        </option>
                        )})
                    }
                  </select>
        </div>
    </>
  )
}

export default DropdownSimple
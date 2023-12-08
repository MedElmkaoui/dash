import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

export type InputProps = {
    forEle: string,
    type: string,
    label: string,
    placeholder: string,
    data?: any,
    setData?: any,
    row: boolean;
    value? : any,
    required: boolean 
}

function Input({forEle, type, label,data , setData, placeholder, row, value, required}: InputProps) {

  const [_type, setType] = useState(type)
  return (
    <div className={`relative w-full ${row && ("xl:w-1/2")}`}>
        <label className="mb-2.5 block text-black dark:text-white">
            {label} {required &&(<span className="text-meta-1">*</span>)}
        </label>
        <input
            type={_type}
            defaultValue={value}
            required= {required}
            onChange={(e)=>setData({...data, [forEle]: e.target.value })}
            placeholder={placeholder}
            className={`relative w-full rounded ${type === 'date' && 'custom-input-date custom-input-date-1'} ${type === 'file' && 'file:py-0.5 px-3 file:rounded-sm file:text-xs file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:hover:bg-primary file:hover:bg-opacity-10 dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white'} border-[1.5px] border-stroke bg-transparent py-3 px-5  outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:text-white text-black-2`}
        />
          {(type == 'password') ? (
            <span 
              className="absolute top-[60%] right-4"
              onClick={()=>{setType('text')}}> 
              <RiEyeLine size={18} />
            </span>
          ):(
            <span 
              className="absolute top-[60%] right-4"
              onClick={()=>{setType('password')}}> 
              <RiEyeOffLine  size={18} />
            </span>
          )}
        
    </div>
  )
}

export default Input
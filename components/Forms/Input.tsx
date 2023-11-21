export type InputProps = {
    forEle: string,
    type: string,
    label: string,
    placeholder: string,
    data?: any,
    setData?: any,
    row: boolean;
    value : any
}

function Input({forEle, type, label,data , setData, placeholder, row, value}: InputProps) {
  return (
    <div className={`w-full ${row && ("xl:w-1/2")}`}>
        <label className="mb-2.5 block text-black dark:text-white">
            {label} <span className="text-meta-1">*</span>
        </label>
        <input
            type={type}
            value={value}
            required
            onChange={(e)=>setData({...data, [forEle]: e.target.value })}
            placeholder={placeholder}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5  outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
    </div>
  )
}

export default Input
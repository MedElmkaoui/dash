'use client'
import Image from 'next/image'
import {useState, useRef, useEffect} from 'react'
import { RiFilter2Line, RiFilter2Fill, RiAddLine, RiSubtractLine } from "react-icons/ri";
import DropdownDefault from '../Dropdowns/DropdownDefault';
import { usePathname } from 'next/navigation';


interface FilterOptions {
    value : string,
    label : string
}
interface Filters {
  id: string,
  name: string,
  options: FilterOptions[]
}

export type FilterProps = {
  filters: Filters[] 
}

const Filter = ({filters}:FilterProps) => {
    const [open, setOpen] = useState(false)
    const [counter, setCounter] = useState(0)  
    const filterBody = useRef<any>(null);
    const pathname = usePathname()
    
     // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }: MouseEvent) => {
        if (!filterBody.current) return;
        if (
          !open ||
          filterBody.current.contains(target)
        )
          return;
          setOpen(false);
      };
      document.addEventListener("click", clickHandler);
      return () => document.removeEventListener("click", clickHandler);
    });

  // close if the esc key is pressed
    useEffect(() => {
      const keyHandler = ({ keyCode }: KeyboardEvent) => {
        if (!open || keyCode !== 27) return;
        setOpen(false);
      };
      document.addEventListener("keydown", keyHandler);
      return () => document.removeEventListener("keydown", keyHandler);
    });

  return (
    <>
      <div className={`px-8 ${pathname.includes('transactions') ? 'px-0' : '' } py-3 rounded-sm  bg-white  dark:border-strokedark dark:bg-boxdark`}>
            <div className="border-t border-b border-stroke dark:border-strokedark px-5 flex items-center justify-between">
                <div className='flex items-center'>
                    <button type='button' onClick={()=>setOpen((p)=> !p)} className='flex text-black dark:text-white items-center gap-2 py-3 px-6  font-semibold'>
                            {open ? <RiFilter2Fill size={20}/> :<RiFilter2Line  size={20}/>}
                        <span className=' text-sm'> ({counter}) Filters </span>
                    </button>
                    <div className="h-[35px] bg-stroke dark:bg-strokedark w-[1px] mx-4"></div>
                    <a href='#' className='text-sm py-2'> 
                        Annuler Tout
                    </a>
                </div>
            </div>
            <div ref={filterBody} className={`text-center px-8 py-6 ${open===true ? 'block' : 'hidden'}`}>
              <form className="grid grid-cols-4">
                    
                    {filters.map((section) => (
                        <>
                            <div className="flex flex-col justify-start col-span-2 px-8">
                              <h3 className="w-fit mb-4">
                                  <span className="font-medium text-gray-900">{section.name}</span>
                              </h3>
                              <div className="flex flex-col gap-3">
                                  {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                      <input
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        checked={section.name == 'CATEGORIE' && option.value === ''}
                                        className="h-4.5 w-4.5 ml-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 text-sm text-gray-600"
                                      >
                                      {option.label}
                                      </label>
                                  </div>
                                  ))}
                              </div>
                            </div>
                        </>
                       
                    ))}
                </form>
            </div>
      </div>
    </>
  )
}

export default Filter

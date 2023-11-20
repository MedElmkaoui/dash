'use client'
import Image from 'next/image'
import {useState, useRef, useEffect} from 'react'
import { RiFilter2Line, RiFilter2Fill } from "react-icons/ri";
import DropdownDefault from '../Dropdowns/DropdownDefault';

const Filter = () => {
    const [open, setOpen] = useState(false)
    const [counter, setCounter] = useState(0)  
    const filterBody = useRef<any>(null);

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
      <div className=" px-8 py-3 rounded-sm  bg-white  dark:border-strokedark dark:bg-boxdark">
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
            <div ref={filterBody} className={`text-center py-6 ${open===true ? 'block' : 'hidden'}`}>
                Hello for Filter!
            </div>
      </div>
    </>
  )
}

export default Filter

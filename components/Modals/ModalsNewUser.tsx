'use client'
import { Fragment, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import FormUser from '../Forms/FormUser'

export type ModalsProps={
  setModel : (valeu:boolean)=>void,
}

export default function Modals({setModel}:ModalsProps) {
  
  const [open, setOpen] = useState(true)
  
  const cancelButtonRef = useRef(null)

  useEffect(() => {
    if(!open){
      setModel(false)
    }
    
  }, [open])
  
  
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-9999" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 dark:bg-meta-4 sm:grid-cols-5">
                  <div className="sm:flex sm:items-start">
                    
                  </div>
                  <div className="mt-2">
                    <FormUser  type='Création' setModal={setModel}/>
                  </div>
                </div>
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

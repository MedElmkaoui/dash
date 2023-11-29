'use client'
import FeedProduits from '@/components/Feed/FeedProduits'
import Filter from '@/components/Filter/Filter'
import TableTransactions from '@/components/Tables/TableTransactions'
import { Tab } from '@headlessui/react'
import { useEffect, useState } from 'react'
import {  HiOutlineCalendarDays, HiOutlineDocumentText, HiOutlineSquaresPlus } from 'react-icons/hi2'
import { RiExchangeDollarFill  } from 'react-icons/ri'

const filters = [
    {
      id: 'category',
      name: 'CATEGORIE',
      options: [
        { value: 'Category Two', label: 'Category Two' },
        { value: 'Category One', label: 'Category One' },
        { value: 'Category Tree', label: 'Category Tree' },
      ],
    },
    {
      id: 'comptes',
      name: 'COMPTES',
      options: [
        { value: '2l', label: 'CIH', checked: false },
        { value: '6l', label: 'TIJARI', checked: false },
      ],
    },
  ]

export default function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentDate, setCurrentDate] = useState<string>('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        let intervalId = setInterval(() => {
        const now = new Date();
        const formattedDate = `${now.toDateString()} ${now.toLocaleTimeString()}`;
        setCurrentDate(formattedDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>


    <div className="rounded-sm border w-full h-[85vh] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
       
        <Tab.Group>
            <div className="flex items-center h-[120px] ml-8">
                <Tab.List className="flex gap-6 ">
                    <Tab className={({ selected }) =>`flex gap-3 items-center py-3 px-2 ${selected ? ' font-normal border-b border-primary text-meta-4 dark:text-white'
                        : ' text-meta-4 font-light dark:text-white'} focus:outline-none`}>
                            <HiOutlineSquaresPlus size={18} /> 
                            Transactions
                    </Tab>
                    <Tab className={({ selected }) =>`flex gap-3 items-center py-3 px-2 ${selected ? ' font-normal border-b border-primary text-meta-4 dark:text-white'
                        : ' text-meta-4 font-light  dark:text-white'} focus:outline-none`}> 
                            <HiOutlineDocumentText size={18} />
                            Charges
                    </Tab>
                </Tab.List>
            </div>
            <Tab.Panels>
                <Tab.Panel >
                    <div className="mx-8">
                        <div className="">
                            <h1 className="text-title-md2 font-bold text-black dark:text-white  ">
                                Transactions
                            </h1>
                            <div className="flex items-center justify-between">
                                <div className="text-sm ml-15 mt-3 mb-5 flex gap-8 w-full">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold"><HiOutlineCalendarDays  size={20} /></span> 
                                        <p className="text-sm"> {currentDate} </p>     
                                    </div> 
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold ">
                                            <RiExchangeDollarFill size={20}/> 
                                        </span> 
                                        <p className="text-sm">50000 Dh</p>
                                    </div>
                                </div>
                                <button className='hover:text-primary underline text-black-2 dark:text-white py-3 px-3'>
                                   <span className='whitespace-nowrap' >Générer Rapport</span>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-9 ">
                            <div className="col-span-5">
                                <FeedProduits />
                            </div>
                            <div className="col-span-4">
                                <Filter filters={filters} />
                                <TableTransactions />
                            </div>
                        </div>
                    </div>
                </Tab.Panel>
                <Tab.Panel>Content </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>

        
        
    </div>
    </>
  )
}

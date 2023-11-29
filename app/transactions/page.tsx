'use client'
import FeedProduits from '@/components/Feed/FeedProduits'
import TableTransactions from '@/components/Tables/TableTransactions'
import { Tab } from '@headlessui/react'
import { useEffect, useState } from 'react'
import {  HiOutlineCalendarDays } from 'react-icons/hi2'
import { RiExchangeDollarFill  } from 'react-icons/ri'

export default function page() {

    const [currentDate, setCurrentDate] = useState<string>('');
    useEffect(() => {
      const intervalId = setInterval(() => {
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
                <Tab.List className="flex gap-2 ">
                    <Tab className={({ selected }) =>`py-3 px-5 rounded-md ${selected ? 'bg-primary text-white dark:text-white'
                        : 'bg-gray text-black-2 dark:bg-meta-4 dark:text-white'}`}>
                            Transactions
                    </Tab>
                    <Tab className={({ selected }) =>`py-3 px-5 rounded-md ${selected ? 'bg-primary text-white dark:text-white'
                        : 'bg-gray text-black-2 dark:bg-meta-4 dark:text-white'}`}>
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
                        </div>
                        <div className="grid grid-cols-9 ">
                            <div className="col-span-5">
                                <FeedProduits />
                            </div>
                            <div className="col-span-4">
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

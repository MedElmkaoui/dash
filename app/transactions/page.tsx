'use client'
import FeedProduits from '@/components/Feed/FeedProduits'
import Filter from '@/components/Filter/Filter'
import TableTransactions from '@/components/Tables/TableTransactions'
import { Tab } from '@headlessui/react'
import { useEffect, useState } from 'react'
import {  HiOutlineCalendarDays, HiOutlineDocumentText, HiOutlineSquaresPlus } from 'react-icons/hi2'
import { RiExchangeDollarFill  } from 'react-icons/ri'



export default function page() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentDate, setCurrentDate] = useState<string>('');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        let intervalId = setInterval(() => {
        const now = new Date();
        const formattedDate = `${now.toDateString()} `;
        setCurrentDate(formattedDate);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>


    <div className="rounded-sm border w-full h-[85vh] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
       
        <Tab.Group >
            <div className="flex mx-8  items-center justify-between h-[120px]">

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
                <div className="flex items-center">
                    <div className="text-sm mt-3 mb-5 flex gap-8 w-full">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold bg-bodydark1 rounded-full p-2"><HiOutlineCalendarDays  size={20}/></span> 
                            <p className="text-sm"> {currentDate} </p>     
                        </div> 
                    </div>         
                </div>
            </div>
            <Tab.Panels>
                <Tab.Panel >
                    <div className="mx-8">
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

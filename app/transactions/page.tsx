'use client'
import FeedProduits from '@/components/Feed/FeedProduits'
import TableTransactions from '@/components/Tables/TableTransactions'
import { Tab } from '@headlessui/react'
import { HiCalendar } from 'react-icons/hi2'

export default function page() {

   const date = new Date()

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
                    <div className="">
                        <div className="grid grid-cols-8 mr-8">
                            <div className="col-span-5">
                                <FeedProduits />
                            </div>
                            <div className="col-span-3">
                                
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

'use client'
import FeedProduits from '@/components/Feed/FeedProduits'
import TableTransactions from '@/components/Tables/TableTransactions'
import { Tab } from '@headlessui/react'
import { RiExchangeDollarFill, RiHomeOfficeLine } from 'react-icons/ri'

export default function page() {
  return (
    <>


    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
       
    <Tab.Group>
        <div className="flex items-center h-[120px] ml-8">
            <Tab.List className="flex gap-6 ">
                <Tab className=" py-3 px-5 bg-gray rounded-md">Transactions</Tab>
                <Tab className=" py-3 px-5 bg-gray rounded-md">Charges</Tab>
                <Tab className=" py-3 px-5 bg-gray rounded-md">Tab 3</Tab>
            </Tab.List>
        </div>
    
        <div className="flex justify-between items-center mx-8 pt-2 w-full">
        <Tab.Panels>
            <Tab.Panel>
                <div className="grid grid-cols-7">
                    <div className="col-span-4">
                        <FeedProduits />
                    </div>

                    <div className="col-span-3">
                        <TableTransactions />
                    </div>
                </div>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
       
            
        </div>

       

        </Tab.Group>

        
        
    </div>
    </>
  )
}

'use client'
import FeedProduits from '@/components/Feed/FeedProduits'
import TableTransactions from '@/components/Tables/TableTransactions'
import { Tab } from '@headlessui/react'

export default function page() {
  return (
    <>


    <div className="rounded-sm border w-full h-[85vh] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
       
        <Tab.Group>
            <div className="flex items-center h-[120px] ml-8">
                <Tab.List className="flex gap-6 ">
                    <Tab className=" py-3 px-5 bg-gray dark:bg-black rounded-md dark:text-white text-black-2">Transactions</Tab>
                    <Tab className=" py-3 px-5 bg-gray dark:bg-black rounded-md dark:text-white text-black-2">Charges</Tab>
                </Tab.List>
            </div>
            <Tab.Panels>
                <Tab.Panel >
                    <div className="grid grid-cols-8 mr-8">
                        <div className="col-span-5">
                            <FeedProduits />
                        </div>
                        <div className="col-span-3">
                            <TableTransactions />
                        </div>
                    </div>
                </Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
            </Tab.Panels>
        </Tab.Group>

        
        
    </div>
    </>
  )
}

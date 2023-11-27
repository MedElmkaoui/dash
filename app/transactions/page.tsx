import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb'
import FeedProduits from '@/components/Feed/FeedProduits'
import { RiExchangeDollarFill, RiHomeOfficeLine } from 'react-icons/ri'

export default function page() {
  return (
    <><Breadcrumb pageName="Agences" showTitle={false} />
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
       
        <div className="flex justify-between items-center mx-8 pt-10">
            
            <h2 className="text-title-md2 font-semibold text-black dark:text-white  ">
                Agences
            </h2>
            <div className="flex gap-3">
            <button 
              className="bg-black px-6 py-3.5 rounded-md text-w"
              >Export</button>
              
            </div>
            
        </div>

        <div className="text-sm ml-15 mt-3 mb-5 flex gap-8 w-full">
            <div className="flex items-center gap-2">
                <span className="font-semibold"><RiHomeOfficeLine size={20} /></span> 
                <p className="text-sm">05 Agence(s) </p>     
            </div> 
            <div className="flex items-center gap-2">
                <span className="font-semibold ">
                    <RiExchangeDollarFill size={20}/> 
                </span> 
                <p className="text-sm">50000 Dh</p>
            </div>
        </div>

        <div className="grid grid-cols-7">
            <div className="col-span-4">
                <FeedProduits />
            </div>

            <div className="col-span-1">
                
            </div>
        </div>

        
        
    </div>
    </>
  )
}

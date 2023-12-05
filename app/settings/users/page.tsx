// Import necessary dependencies and components
import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import Filter from '@/components/Filter/Filter';
import CardUsers from '@/components/Cards/CardUsers';
import TableUtilisateurs from '@/components/Tables/TableUtilisateurs';
import Link from 'next/link';
import { BiUser, BiDollar } from 'react-icons/bi';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import Feed from '@/components/Feed/Feed';
import { RiUserLine } from 'react-icons/ri';



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

const UserData = [
  {
    id: 1,
    fName: 'Omar',
    lName: 'Smith',
    email: 'omar@example.com',
    tel: '123-456-7890',
    adr: '123 Street, City',
    salary: 50000,
    cin: 'A123456',
    dateInscription: '2023-01-01',
  },
  {
    id: 2,
    fName: 'Omar',
    lName: 'Smith',
    email: 'omar@example.com',
    tel: '123-456-7890',
    adr: '123 Street, City',
    salary: 50000,
    cin: 'A123456',
    dateInscription: '2023-01-01',
  },
  {
    id: 3,
    fName: 'Omar',
    lName: 'Smith',
    email: 'omar@example.com',
    tel: '123-456-7890',
    adr: '123 Street, City',
    salary: 50000,
    cin: 'A123456',
    dateInscription: '2023-01-01',
  },
  
];

const Utilisateurs: React.FC = () => {
  // You can use the useState hook if needed

  return (
    <>
      <Breadcrumb pageName="Utilisateurs" showTitle={false} />
      <div className="rounded-sm border h-[82vh] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-between items-center mx-8 pt-10">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white">
            Utilisateurs
          </h2>
          <Link
            href="/settings/users/new"
            className="inline-flex items-center justify-center gap-2.5 rounded-md bg-black  py-3.5 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-10"
          >
            <span>
              <HiOutlinePlusCircle size={22} />
            </span>
            <span>Nouveau </span>
          </Link>
        </div>
        <div className="text-sm ml-15 mt-3 mb-5 flex gap-8 w-full">
          {/* Update these lines based on your entity properties */}
          <div className="flex items-center gap-2">
            <span className="font-semibold">
              <BiUser size={20} />
            </span>
            <p className="text-sm">Total Utilisateurs: 10</p>
          </div>
          
        </div>
        {/* You might need to create a Filter component specific to Utilisateurs */}
         <Filter filters={filters} /> 
        {/* You might need to create a TableUtilisateurs component */}

          <Feed>
            {UserData.map((ele)=>(
              <CardUsers key={ele.id} data={ele} >
                  <RiUserLine size={20} /> 
              </CardUsers>
            ))}
          </Feed>

        {/*<TableUtilisateurs />*/} 
      </div>
    </>
  );
};

export default Utilisateurs;

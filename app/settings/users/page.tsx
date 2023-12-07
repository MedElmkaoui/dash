'use client'
import { useEffect, useState } from 'react';

import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import Filter from '@/components/Filter/Filter';
import CardUsers from '@/components/Cards/CardUsers';
import Link from 'next/link';
import { BiUser } from 'react-icons/bi';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import Feed from '@/components/Feed/Feed';
import { RiUserLine } from 'react-icons/ri';
import { User } from '@/types/user';



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


const Utilisateurs: React.FC = () => {
  
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/user'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

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
            <p className="text-sm">Total Utilisateurs: {users.length}</p>
          </div>
          
        </div>
         <Filter filters={filters} /> 

          <Feed>
            {users.map((ele)=>(
              <CardUsers key={ele.id} data={ele} >
                  <RiUserLine size={20} /> 
              </CardUsers>
            ))}
          </Feed>

      </div>
    </>
  );
};

export default Utilisateurs;

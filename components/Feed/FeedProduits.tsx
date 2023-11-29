'use client'
import { Fragment, useEffect, useState } from 'react'
import CardProduit from '@/components/Cards/CardProduit'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import {  MinusIcon, PlusIcon} from '@heroicons/react/20/solid'
import { Product } from '@/types/product'
import { HiOutlineCube } from 'react-icons/hi2'
import Feed from '@/components/Feed/Feed'

const produitsData: Product[] = [ 
  {
    id: 1,
    nom: 'Produit A',
    cat: 'Category Tree',
    compte: 'Compte CIH',
    cout: 500.0,
    in_out: 'In',
  },
  {
    id: 2,
    nom: 'Produit B',
    cat: 'Category Two',
    compte: 'Compte CIH',
    cout: 500.0,
    in_out: 'Out',
  },
  {
    id: 3,
    nom: 'Produit C',
    cat: 'Category One',
    compte: 'Compte CIH',
    cout: 500.0,
    in_out: 'In',
  },
  {
    id: 4,
    nom: 'Produit D',
    cat: 'Category Two',
    compte: 'Compte CIH',
    cout: 500.0,
    in_out: 'In',
  },
  {
    id: 5,
    nom: 'Produit E',
    cat: 'Category One',
    compte: 'Compte CIH',
    cout: 500.0,
    in_out: 'Out',
  },
  {
    id: 6,
    nom: 'Produit F',
    cat: 'Category Tree',
    compte: 'Compte CIH',
    cout: 500.0,
    in_out: 'Out',
  },
];

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

export default function FeedProduits() {
  
  const [in_out, setIn_Out] = useState([
    { name: 'In', selected: true },
    { name: 'Out', selected: false },
  ])
  const [filteredProduits, setFilteredProduits] = useState<Product[]>([]);
  const [selectedType, setSelectedType] = useState('In'); 
  const [selectedCat, setSelectedCat] = useState(''); 

  useEffect(() => {
    let filteredData = produitsData.filter((ele) => ele.in_out === selectedType);
    if(selectedCat != ''){
      filteredData = produitsData.filter((ele) => ele.in_out === selectedType).filter((ele) => ele.cat===selectedCat);
    }
    setFilteredProduits(filteredData);
  }, [selectedType, selectedCat]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setSelectedCat(event.target.value);
  }
  

  return (
    <div className="bg-transparent">
      <div>
        <main className="mx-auto max-w-7xl ">
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-2  lg:grid-cols-9">
              {/* Filters */}
                <form className="hidden lg:col-span-2 lg:block">
                    <ul role="list" className=" py-3 font-medium text-black-2 dark:text-white">
                      {in_out.map((ele) => (
                        <li className='flex gap-2 items-center mb-2.5' key={ele.name}>
                          <input 
                            type='radio' 
                            value={ele.name}
                            checked={selectedType === ele.name}
                            onChange={handleRadioChange}
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label className='font-normal'>{ele.name}</label>
                        </li>
                      ))}
                    </ul>
                    {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                        {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between py-2 text-sm text-black-2 dark:text-white hover:text-gray-500">
                                  <span className="font-medium text-gray-900">{section.name}</span>
                                  <span className="ml-6 flex items-center">
                                  {open ? (
                                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                  </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6"> 
                            <div className="space-y-4">
                                {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      onChange={handleCheckboxChange}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      checked={section.name == 'CATEGORIE' && option.value === selectedCat}
                                      className="h-4.5 w-4.5 ml-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className="ml-3 text-sm text-gray-600"
                                    >
                                    {option.label}
                                    </label>
                                </div>
                                ))}
                            </div>
                            </Disclosure.Panel>
                        </>
                        )}
                    </Disclosure>
                    ))}
                </form>

              {/* Product grid */}
                <div className="lg:col-span-7 w-full max-h-[60vh] overflow-y-scroll" >
                    <Feed >
                      {
                        filteredProduits.length === 0 ? (
                          produitsData.map((produit) => (
                            <CardProduit
                              key={produit.id}
                              data={produit}
                            >
                              <HiOutlineCube size={25} />
                            </CardProduit>
                          ))
                        ) : (
                          filteredProduits.map((produit) => (
                            <CardProduit
                              key={produit.id}
                              data={produit}
                            >
                              <HiOutlineCube size={25} />
                            </CardProduit>
                          ))
                        )
                      }
                    </Feed>
                </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

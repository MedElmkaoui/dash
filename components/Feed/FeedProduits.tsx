'use client'
import { Fragment, useState } from 'react'
import CardProduit from '@/components/Cards/CardProduit'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Product } from '@/types/product'
import { HiOutlineCube } from 'react-icons/hi2'
import Feed from '@/components/Feed/Feed'


const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
]
const filters = [
  {
    id: 'in_out',
    name: 'IN_OUT',
    options: [
      { value: 'in', label: 'IN', checked: false },
      { value: 'out', label: 'OUT', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'CATEGORIE',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const produitsData: Product[] = [
    
    {
      id: 1,
      nom: 'Produit C',
      cat: 'Category Two',
      compte: 'Compte CIH',
      cout: 500.0,
      entree_sortie: 'Entrée',
    },
    {
      id: 1,
      nom: 'Produit C',
      cat: 'Category Two',
      compte: 'Compte CIH',
      cout: 500.0,
      entree_sortie: 'Entrée',
    },
    {
      id: 1,
      nom: 'Produit C',
      cat: 'Category Two',
      compte: 'Compte CIH',
      cout: 500.0,
      entree_sortie: 'Entrée',
    },
    {
      id: 1,
      nom: 'Produit C',
      cat: 'Category Two',
      compte: 'Compte CIH',
      cout: 500.0,
      entree_sortie: 'Entrée',
    },
    {
      id: 1,
      nom: 'Produit C',
      cat: 'Category Two',
      compte: 'Compte CIH',
      cout: 500.0,
      entree_sortie: 'Entrée',
    },
    {
      id: 1,
      nom: 'Produit C',
      cat: 'Category Two',
      compte: 'Compte CIH',
      cout: 500.0,
      entree_sortie: 'Entrée',
    },
    {
      id: 1,
      nom: 'Produit C',
      cat: 'Category Two',
      compte: 'Compte CIH',
      cout: 500.0,
      entree_sortie: 'Entrée',
    },
    {
      id: 1,
      nom: 'Produit C',
      cat: 'Category Two',
      compte: 'Compte CIH',
      cout: 500.0,
      entree_sortie: 'Entrée',
    },
    {
      id: 1,
      nom: 'Produit C',
      cat: 'Category Two',
      compte: 'Compte CIH',
      cout: 500.0,
      entree_sortie: 'Entrée',
    },
    
    
  ];

  return (
    <div className="bg-transparent">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
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
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto  max-w-7xl  px-2 sm:px-6 lg:px-6">
          
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-2  lg:grid-cols-6">
              {/* Filters */}
                <form className="hidden lg:block">
                    

                    {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                        {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between py-2 text-sm text-white hover:text-gray-500">
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
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
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
                <div className="lg:col-span-5 w-full max-h-[60vh] overflow-y-scroll" >
                    <Feed >
                     {
                        produitsData.map((produit) => (
                            <CardProduit key={produit.id} name={produit.nom} category={produit.cat} compte={produit.compte} in_out={produit.entree_sortie} >
                                <HiOutlineCube size={25} /> 
                            </CardProduit>
                        ))
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

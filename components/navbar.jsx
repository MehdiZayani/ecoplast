import React from 'react';
import Image from 'next/image';
export default function Navbar() {
   const recyclage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Recycling_symbol2.svg/1200px-Recycling_symbol2.svg.png"
  return (
        <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
        <a className="flex items-center">
        {/* <Image src="/images/recyclage.png"alt='recyclage' width={40} height={40} /> */}
        <p className="self-center text-3xl font-semibold whitespace-nowrap text-black-900 flex"><p className='text-lime-400'>Eco</p>Plast</p>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-language-select">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-lime-400 md:p-0 md:dark:text-lime-400" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-lime-400 md:hover:bg-transparent md:hover:text-lime-400 md:p-0 text-black-900 md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black-900 md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-black-900 md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
            </li>
            <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-black-900 md:dark:hover:text-lime-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>

)};
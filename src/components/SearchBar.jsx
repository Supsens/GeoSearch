import React, { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const SearchBar = ({ setQuery }) => {
const navigate = useNavigate();

  
  return (
    <div className='flex flex-col md:flex-row justify-between px-8 py-8 md:px-16 bg-slate-50 text-stone-950 dark:bg-slate-950 dark:text-white transition-all duration-300'>
      <div className='flex items-center gap-4 mb-4 md:mb-0'>
        <FaSearch className='text-stone-500 dark:text-gray-400' />
        <input
          type="text"
          placeholder='Search for a Country'
          className=' w-full  bg-slate-100 dark:bg-slate-900 text-stone-950 dark:text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition-all duration-300'
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <div className='flex items-center gap-4'>
        <select className='hidden md:block bg-slate-100 dark:bg-slate-900 text-stone-950 dark:text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 transition-all duration-300' onChange={(e)=>
    navigate(`/${e.target.value}`)} >
          <option value="">All</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>    
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>    
        </select>
      </div>
    </div>
  );
};

export default SearchBar;

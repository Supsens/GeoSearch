import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white transition-all duration-300">
      <img className="w-full h-48 object-cover rounded-md" src={item?.flags?.svg} alt={`${item?.name?.common} flag`} />
      <h2 className="text-lg font-semibold dark:text-gray-200">{item?.name?.common}</h2>
      <h3 className="text-sm dark:text-gray-400">Population: {item?.population.toLocaleString()}</h3>
      <h3 className="text-sm dark:text-gray-400">Region: {item?.region}</h3>
      <h3 className="text-sm dark:text-gray-400">Capital: {item?.capital || 'N/A'}</h3>
    </div>
  );
};

export default Card;

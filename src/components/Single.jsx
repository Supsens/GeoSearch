import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Single = () => {
  const { name } = useParams();
  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    async function fetchSingleData() {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!res.ok) {
          const message = `An error has occurred: ${res.status}`;
          throw new Error(message);
        }
        const data = await res.json();
        setItem(data[0]);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchSingleData();
  }, [name]);

  if (!item) {
    return (
        <p>Loading...</p>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 shadow-lg bg-white dark:bg-gray-800 dark:text-white transition-all duration-300  mx-auto min-h-[90vh] max-w-full " >
      
      <div className="w-full md:w-1/2">
        <img className="w-full h-full object-cover rounded-md shadow-lg" src={item.flags?.svg} alt={`${item.name?.common} flag`} />
      </div>

     
      <div className="flex flex-col justify-between w-full md:w-1/2">
        <h2 className="text-5xl font-bold mb-4">{item.name?.common}</h2>
        <ul className="space-y-2">
          <li><strong>Official Name:</strong> {item.name?.official}</li>
          <li><strong>Population:</strong> {item.population.toLocaleString()}</li>
          <li><strong>Region:</strong> {item.region}</li>
          <li><strong>Subregion:</strong> {item.subregion}</li>
          <li><strong>Capital:</strong> {item.capital || 'N/A'}</li>
          <li><strong>Languages:</strong> {Object.values(item.languages || {}).join(', ')}</li>
          <li><strong>Currencies:</strong> {Object.values(item.currencies || {}).map(currency => `${currency.name} (${currency.symbol})`).join(', ')}</li>
          <li><strong>Timezone:</strong> {item.timezones.join(', ')}</li>
          <li><strong>Borders:</strong> {item.borders?.length ? item.borders.join(', ') : 'None'}</li>
        </ul>
        <a 
          href={item.maps.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-blue-600 dark:text-blue-400 underline"
        >
          View on Google Maps
        </a>
      </div>
      <Link to={'/'}>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Back
      </button>
      </Link>
    </div>
  );
};

export default Single;

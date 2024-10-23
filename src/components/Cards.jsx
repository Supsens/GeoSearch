import React, { useState } from 'react';
import Card from './Card';
import not from '../../public/not.svg';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Cards = ({ data, query }) => {
  const { region } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust the number of items per page

  // Filter by region if the region parameter exists
  if (region) {
    data = data.filter((item) => {
      return item?.region?.toLowerCase() === region.toLowerCase();
    });
  }

  // Filter by search query
  data = data.filter((item) => {
    return item?.name?.common.toLowerCase().includes(query.toLowerCase());
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle case when no data is found
  if (data.length === 0) {
    return (
      <div className="p-4 bg-gray-100 dark:bg-gray-900 transition-all duration-300 text-center">
        <img src={not} alt="Not Found" className="w-full h-auto max-w-md mx-auto my-8 object-contain" />
        <p className="text-gray-600 dark:text-gray-300">No countries found.</p>
      </div>
    );
  }

  // Change Page
  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((item) => (
          <Link key={item?.ccn3} to={`/country/${item?.name?.common}`}>
            <Card item={item} />
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <p className="text-gray-600 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() => handlePageChange('next')}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;

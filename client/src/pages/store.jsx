

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const categories = [
  '',
  'Amino',
  'Mass Gainer',
  'Fat Burner',
  'Recovery',
  'BCAA',
  'Glutamine',
  'Electrolytes',
  'Meal Replacement',
  'Testosterone Booster',
  'Weight Loss',
  'Weight Gain',
  'Fat Loss',
  'Protein',
  'Pre-Workout',
  'Vitamins',
  'Creatine',
  'Protein Bars',
  'Protein Supplements',
  'Protein Shakes',
  'Protein Snacks',
  'Whey Blends',
  'Whey Isolate',
  'Gym Bags',
  'Gym Accessories',

];

const Store = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState('');
  const [hoveredProductId, setHoveredProductId] = useState(null);
 
   // Example discount percentage
  

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Show 12 products per page


  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!category) {
      setFiltered(products);
    } else {
      setFiltered(
        products.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        )
      );
    }
    setCurrentPage(1); // Reset to page 1 on category change
  }, [category, products]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
      setFiltered(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  const navigate = useNavigate();
  // Pagination calculations
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // scroll to top on page change
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 md:px-12">
      <h2 className="text-2xl font-bold text-center mb-10 text-red-800">
      World #1 Choice for Authentic Supplements
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Category List */}
        <div className="md:w-1/5 w-full bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Category</h3>
          <ul className="space-y-2">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                onClick={() => setCategory(cat)}
                className={`cursor-pointer px-2 py-1 rounded text-sm font-medium transition-all ${
                  category === cat
                    ? 'text-red-600 underline'
                    : 'text-gray-700 hover:text-red-600 hover:underline'
                }`}
              >
                {cat === '' ? 'All' : cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Grid */}
        <div className=" flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentItems.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No products found.
            </p>
          ) : (
            currentItems.map((product) => (
              <div
                key={product._id}
                
                className=" h-[310px] relative group bg-gray-50 rounded-xl shadow hover:shadow-lg transition-all duration-300 p-4 cursor-pointer"
                onMouseEnter={() => setHoveredProductId(product._id)}
                onMouseLeave={() => setHoveredProductId(null)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-50 mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <h4 className="mt-2 text-[15px] font-semibold text-gray-800 text-left">
                  {product.name}
                </h4>
              
              <div className="flex items-center justify-between mt-1">
                  <p className="text-m font-medium text-gray-700">
                    ${product.price.toFixed(2)}
                  </p>
                 <p className={`font-medium ${product.stockQuantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}
                </p>
                </div>
                 
                
        {/* Slide-up Add to Cart button */}
                <div
                  className={`absolute bottom-1 left-4 right-4 transition-all duration-300 ease-in-out ${
                    hoveredProductId === product._id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <button
  onClick={() => navigate(`/products/${product._id}`)}
  className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
>
  Select Option
</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => changePage(i + 1)}
              className={`px-4 py-2 rounded border text-sm font-medium ${
                currentPage === i + 1
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Store;

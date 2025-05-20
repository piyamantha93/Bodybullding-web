import React, { useState, useEffect } from 'react';
import Toast from '../../components/toste/Toast'; // Adjust path accordingly

const fakeApiFetchProducts = () => {
  // Simulate fetching product data from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Whey Protein',
          price: 29.99,
          category: 'Supplements',
          image: 'https://via.placeholder.com/150?text=Whey+Protein',
        },
        {
          id: 2,
          name: 'Dumbbells Set',
          price: 59.99,
          category: 'Equipment',
          image: 'https://via.placeholder.com/150?text=Dumbbells+Set',
        },
        {
          id: 3,
          name: 'Resistance Bands',
          price: 19.99,
          category: 'Equipment',
          image: 'https://via.placeholder.com/150?text=Resistance+Bands',
        },
        {
          id: 4,
          name: 'Creatine Monohydrate',
          price: 24.99,
          category: 'Supplements',
          image: 'https://via.placeholder.com/150?text=Creatine',
        },
        {
          id: 5,
          name: 'Gym Gloves',
          price: 14.99,
          category: 'Accessories',
          image: 'https://via.placeholder.com/150?text=Gym+Gloves',
        },
          {
          id: 6,
          name: 'Whey Protein',
          price: 29.99,
          category: 'Supplements',
          image: 'https://via.placeholder.com/150?text=Whey+Protein',
        },
        {
          id: 7,
          name: 'Dumbbells Set',
          price: 59.99,
          category: 'Equipment',
          image: 'https://via.placeholder.com/150?text=Dumbbells+Set',
        },
        {
          id: 8,
          name: 'Resistance Bands',
          price: 19.99,
          category: 'Equipment',
          image: 'https://via.placeholder.com/150?text=Resistance+Bands',
        },
        {
          id: 9,
          name: 'Creatine Monohydrate',
          price: 24.99,
          category: 'Supplements',
          image: 'https://via.placeholder.com/150?text=Creatine',
        },
        {
          id: 10,
          name: 'Gym Gloves',
          price: 14.99,
          category: 'Accessories',
          image: 'https://via.placeholder.com/150?text=Gym+Gloves',
        },

          {
          id: 11,
          name: 'Whey Protein',
          price: 29.99,
          category: 'Supplements',
          image: 'https://via.placeholder.com/150?text=Whey+Protein',
        },
        {
          id: 12,
          name: 'Dumbbells Set',
          price: 59.99,
          category: 'Equipment',
          image: 'https://via.placeholder.com/150?text=Dumbbells+Set',
        },
        {
          id: 13,
          name: 'Resistance Bands',
          price: 19.99,
          category: 'Equipment',
          image: 'https://via.placeholder.com/150?text=Resistance+Bands',
        },
        {
          id: 14,
          name: 'Creatine Monohydrate',
          price: 24.99,
          category: 'Supplements',
          image: 'https://via.placeholder.com/150?text=Creatine',
        },
        {
          id: 15,
          name: 'Gym Gloves',
          price: 14.99,
          category: 'Accessories',
          image: 'https://via.placeholder.com/150?text=Gym+Gloves',
        },
          {
          id: 16,
          name: 'Gym Gloves',
          price: 14.99,
          category: 'Accessories',
          image: 'https://via.placeholder.com/150?text=Gym+Gloves',
        },
      ]);
    }, 800);
  });
};

const Store = ({ onCartUpdate }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    async function loadProducts() {
      const data = await fakeApiFetchProducts();
      setProducts(data);
      setFiltered(data);
    }
    loadProducts();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [categoryFilter, sortOrder, products]);

  useEffect(() => {
    if (onCartUpdate) {
      onCartUpdate(cart.length);
    }
  }, [cart, onCartUpdate]);

  const filterAndSortProducts = () => {
    let updated = [...products];
    if (categoryFilter !== 'All') {
      updated = updated.filter((p) => p.category === categoryFilter);
    }
    updated.sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
    setFiltered(updated);
  };

  const handleAddToCart = (product, quantity) => {
    const existing = cart.find((item) => item.id === product.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity }];
    }
    setCart(updatedCart);
    setToastMessage(`${product.name} (x${quantity}) added to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
    

      {/* Filters & Sort */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8 space-y-4 sm:space-y-0">
        <div>
          <label className="mr-2 font-semibold text-gray-700">Category:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option>All</option>
            <option>Supplements</option>
            <option>Equipment</option>
            <option>Accessories</option>
          </select>
        </div>
        <div>
          <label className="mr-2 font-semibold text-gray-700">Sort by Price:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={handleAddToCart} />
        ))}
      </div>

      {/* Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage('')}
        />
      )}
    </div>
  );
};

const ProductCard = ({ product, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((q) => Math.min(q + 1, 10));
  const decrement = () => setQuantity((q) => Math.max(q - 1, 1));

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
      <p className="text-red-700 font-bold mb-4">${product.price.toFixed(2)}</p>

      <div className="flex items-center space-x-3 mb-4">
        <button
          onClick={decrement}
          className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-12 text-center border border-gray-300 rounded"
        />
        <button
          onClick={increment}
          className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        onClick={() => onAdd(product, quantity)}
        className="mt-auto bg-red-700 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Store;

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import CategoryList from './CategoryList';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?search=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  };

  const handleSelectProduct = (productId) => {
    setSelectedProduct(productId);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <div className="main-content">
        <CategoryList onSelectCategory={() => {}} />
        {selectedProduct ? (
          <ProductDetail productId={selectedProduct} />
        ) : (
          <ProductList products={products} onSelectProduct={handleSelectProduct} />
        )}
      </div>
    </div>
  );
};

export default App;
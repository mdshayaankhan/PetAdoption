import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import GridComplexExample from './GridComplexExample';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleRescue = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="product-list">
      {selectedProduct ? (
        <GridComplexExample />
      ) : (
        products.map(product => (
          <ProductCard key={product._id} product={product} onRescue={() => handleRescue(product)} />
        ))
      )}
    </div>
  );
};

export default ProductList;

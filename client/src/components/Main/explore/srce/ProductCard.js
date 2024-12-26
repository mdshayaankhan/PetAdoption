import React from 'react';
import './ProductList.css';

const ProductCard = ({ product, onRescue }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="200" height="300" style={{ objectFit: 'cover' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Gender: {product.type}</p> {/* Corrected this line */}
      <button className="btn" onClick={onRescue}>Rescue</button>
    </div>
  );
};

export default ProductCard;

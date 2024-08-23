import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product, onShowDetails, showNotification }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    showNotification(`${product.name} добавлен в корзину`);
  };

  return (
    <div className="product-card" onClick={() => onShowDetails(product)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} руб.</p>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
}

export default ProductCard;

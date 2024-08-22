import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ id, name, price, image, showNotification }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
    showNotification(`${name} добавлен в корзину`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price} руб.</p>
      <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
}

export default ProductCard;

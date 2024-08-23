import React from 'react';
import '../css/ProductModal.css';

function ProductModal({ product, onClose, addToCart }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">{product.name}</h2>
        <div className="modal-images">
          {product.images.map((img, index) => (
            <img key={index} src={img} alt={product.name} />
          ))}
        </div>
        <p className="modal-price">Цена: {product.price} руб.</p>
        <div>
          {product.description.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <button className="modal-button" onClick={() => addToCart(product)}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default ProductModal;

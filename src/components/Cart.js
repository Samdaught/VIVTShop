import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Cart({ showNotification }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (id, name) => {
    removeFromCart(id);
    showNotification(`${name} удален из корзины`);
  };

  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price} руб.
                <button onClick={() => handleRemoveFromCart(item.id, item.name)}>Удалить</button>
              </li>
            ))}
          </ul>
          <Link to="/checkout">
            <button>Перейти к оформлению заказа</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;

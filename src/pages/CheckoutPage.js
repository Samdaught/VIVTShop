import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CheckoutPage() {
  const { cartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Оформление заказа</h2>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price} руб.
              </li>
            ))}
          </ul>
          <h3>Итого: {totalAmount} руб.</h3>
          <form>
            <div>
              <label>
                Имя:
                <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                Адрес доставки:
                <input type="text" name="address" required />
              </label>
            </div>
            <button type="submit">Оформить заказ</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;

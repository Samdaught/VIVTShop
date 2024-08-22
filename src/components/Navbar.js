import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/clothing">Одежда</Link>
        </li>
        <li>
          <Link to="/cart">Корзина</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

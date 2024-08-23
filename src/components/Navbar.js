import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <p>VIVT-Store</p>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothing" className={({ isActive }) => (isActive ? 'active' : '')}>
            Одежда
          </NavLink>
        </li>
        <li>
          <NavLink to="/office" className={({ isActive }) => (isActive ? 'active' : '')}>
            Канцелярия
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
            Корзина
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

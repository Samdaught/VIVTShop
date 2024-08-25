import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container navigation">
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
          <li>
            <NavLink to="/test" className={({ isActive }) => (isActive ? 'active' : '')}>
              Тест
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

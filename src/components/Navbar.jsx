import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <button type="button" className="navbar-item navbar-left border-right">
        <Link className="navbar-link" to="/">Товары</Link>
      </button>
      <button type="button" className="navbar-item border-right">
        <Link className="navbar-link" to="/favorites">Избранное</Link>
      </button>
      <button type="button" className="navbar-item navbar-right">
        <Link className="navbar-link" to="/cart">Корзина</Link>
      </button>
    </nav>
  );
}

export default Navbar;

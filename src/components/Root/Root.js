import './Root.css';
import React, {useState} from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import {useCart} from '../Cart/CartContext.js';

function Root () {

    const {cart} = useCart();
    const itemCount = cart.length;
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div>
            <header className="root">
                <h1><Link to='/'>Simon Ray Di Scala</Link></h1>
                <nav className="desktop-nav">
                    <ul>
                        <li><NavLink to='/about'>ABOUT</NavLink></li>
                        <li><NavLink to='/portfolio'>PORTFOLIO</NavLink></li>
                        <li><NavLink to='/cart'>CART ({itemCount})</NavLink></li>
                    </ul>
                </nav>
            

            {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </header>

      {/* Drawer menu */}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ✕
        </button>
        <ul>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)}>ABOUT</NavLink></li>
          <li><NavLink to="/portfolio" onClick={() => setIsOpen(false)}>PORTFOLIO</NavLink></li>
          <li><NavLink to="/cart" onClick={() => setIsOpen(false)}>CART ({itemCount})</NavLink></li>
        </ul>
      </div>
            <Outlet />
        </div>
    )
}

export default Root;
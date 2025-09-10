import './Root.css';
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Root () {

    return(
        <div>
        <div className='root'>
        <h1>Simon RAY DI SCALA</h1>
        <nav>
            <ul>
                <li><NavLink to='/about'>ABOUT</NavLink></li>
                <li><NavLink to='/portfolio'>PORTFOLIO</NavLink></li>
                <li><NavLink to='/cart'>CART</NavLink></li>
            </ul>
        </nav>
        </div>
        <Outlet />
        </div>
    )
}

export default Root;
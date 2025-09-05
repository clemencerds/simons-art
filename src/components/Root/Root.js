import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Root () {

    return(
        <div>
        <h1>this is the Root</h1>
        <nav>
            <ul>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink to='/cart'>Cart</NavLink></li>
            </ul>
        </nav>
        <Outlet />
        </div>
    )
}

export default Root;
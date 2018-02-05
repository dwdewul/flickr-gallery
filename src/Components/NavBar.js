import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="/cat">Cats</a></li>
                <li><a href="/cat">Dogs</a></li>
                <li><a href="/cat">Coffee</a></li>
            </ul>
        </nav>
    );
}
export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/search">Search</NavLink></li>
                <li onClick={(q) => props.handleDefault("cat")}><NavLink to="/cat">Cat</NavLink></li>
                <li onClick={(q) => props.handleDefault("dog")}><NavLink to="/dog">Dog</NavLink></li>
                <li onClick={(q) => props.handleDefault("coffee")}><NavLink to="/coffee">Coffee</NavLink></li>
            </ul>
        </nav>
    );
}
export default NavBar;
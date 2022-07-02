import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav'>
            <div>
                <h1>Tshirt Mania</h1>
            </div>
            <div className='nav-text'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/order"}>Order</Link>
            </div>
        </nav>
    );
};

export default Header;
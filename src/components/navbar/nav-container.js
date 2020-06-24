import React from 'react';
import './navbar.css';

const navbar = props => (
<header className="navbar">
    <nav className="navigation">
        <div></div>
        <img src="/VIDD.png"></img>
        <div className= "spacer" />
        <div className="nav_items">
            <ul>
                {/* <li><a href="/">+ New VIDD room</a></li> */}
                <button type="button">+ New VIDD room</button>
            </ul>
        </div>
    </nav>
</header>
);

export default navbar;

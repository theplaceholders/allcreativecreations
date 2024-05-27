
import { useState } from 'react';
import MenuIcon from './MenuIcon';
import MenuPanel from './MenuPanel';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_without_text.png'
import './navbar.sass'

const NavBar = () => {
    const [showMenuPanel, setShowMenuPanel] = useState(false);

    const toggleShowMenuPanel = (e) => {
        const menuIcon = document.getElementById('menu-icon');
        menuIcon.classList.toggle('close');
        const navbar = document.getElementById('navbar');
        if (menuIcon.classList.contains('close')) {
            setShowMenuPanel(true);
            navbar.style.boxShadow = 'none';
            navbar.style.backgroundColor = 'white';
        } else {
            setShowMenuPanel(false);
            navbar.style.boxShadow = null;
            navbar.style.backgroundColor = null;
        }
    };

    return (
        <>
            <nav id="navbar">
                <div className="navbar__logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">About</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Projects</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Reserve</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/contact-us" className="navbar__link">Contact Us</Link>
                    </li>
                </ul>
                <MenuIcon handleClickEvent={toggleShowMenuPanel} />
            </nav>
            <MenuPanel show={showMenuPanel} toggleShowMenuPanel={toggleShowMenuPanel} />
        </>
    );
};

export default NavBar;

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo'>
                        <i className="fas fa-globe" > React Tourism</i>
                    </Link>
                    
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-links" onClick={closeMobileMenu} />Principal
                        </li>
                        <li className='nav-item'>
                            <Link to="/lugares" className="nav-links" onClick={closeMobileMenu} />Lugares
                        </li>
                        <li className='nav-item'>
                            <Link to="/contatos" className="nav-links" onClick={closeMobileMenu} />Contatos
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

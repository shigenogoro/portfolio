/* eslint-disable react/prop-types */
import './PhoneNav.css';
import { useState } from 'react';

const PhoneNav = ({ onPageChange }) => {
    // State Management
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="phone-nav">
            <div className="phone-nav-header">
                <button className="menu-btn" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>

            <div className={`phone-nav-menu ${isOpen ? 'open' : ''}`}>
                <ul className="phone-nav-list">
                    <li className="phone-nav-item">
                        <button className="phone-nav-btn" onClick={() => { onPageChange('intro'); toggleMenu(); }}>
                            <i className="fa fa-home nav-icon"></i> Home
                        </button>
                    </li>
                    <li className="phone-nav-item">
                        <button className="phone-nav-btn" onClick={() => { onPageChange('resume'); toggleMenu(); }}>
                            Resume
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PhoneNav;
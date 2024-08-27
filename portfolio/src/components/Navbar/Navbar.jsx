import './Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
    // State Management
    const [background, setBackground] = useState("rgba(0,0,0,0.2");
    const [fontColor, setFontColor] = useState("white");

    // On Page Load
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    // Functions
    const handleScroll = () => {
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > navbar.offsetTop) {
            setBackground('white');
            setFontColor('black');
        } else {
            setBackground("rgba(0,0,0,0.2)")
            setFontColor('white')
        }
    }

    return (
        <div className="navbar navbar-fixed-top" style={{backgroundColor: background}}>
            <ul id="nav-list">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link" style={{color: fontColor}}>
                        <i className="fa fa-home nav-icon" style={{color: fontColor}}></i> Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/resume/'} className="nav-link" style={{color:fontColor}}>
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar navbar-fixed-top">
            <ul id="nav-list">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">
                        <i className="fa fa-home nav-icon"></i> Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/resume/'} className="nav-link">
                        Resume
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
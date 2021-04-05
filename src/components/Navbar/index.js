import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {

    return (
        <div>
            <nav className="navbar">
                <Link to="/">
                    <img src="###" className="logo" alt="logo_solomia" />
                </Link>

                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                    <li className="nav-item">

                        <Link to='/about' className="nav-link">Nosotros</Link>

                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" >Contacto</Link>
                    </li>

                </ul>

            </nav>
        </div>
    )
}

export default Navbar;
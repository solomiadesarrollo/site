import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {

    return (
        <div>
            <nav className="navbar">
                <div className="icons-container">
                    <Link to="/">
                        <img src="###" className="logo" alt="logo_solomia" />
                    </Link>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">HOME |</Link>
                    </li>

                    <li className="nav-item">

                        <Link to='/about' className="nav-link">CATEGORIAS</Link>

                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">| NUESTRO PROYECTO</Link>
                    </li>

                </ul>

            </nav>
        </div>
    )
}

export default Navbar;
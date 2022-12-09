import logo from "../assets/logo_header.svg";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                <h1>
                    <img src={logo} className="header__logo" alt="Logo du site Kasa" />
                </h1>
            </Link>
            <nav className="header__nav">
                <NavLink to="/" className="header__nav-link">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="header__nav-link">
                    À Propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
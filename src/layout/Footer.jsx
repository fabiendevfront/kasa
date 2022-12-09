import logo from "../assets/logo_footer.svg";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/" className="footer__link">
                <img src={logo} className="footer__logo" alt="Logo du site Kasa" />
            </Link>
            <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
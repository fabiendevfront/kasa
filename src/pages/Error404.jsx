import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="error404">
            <h2 className="error404__title">404</h2>
            <p className="error404__txt">Oups! La page que vous demandez n'existe pas</p>
            <Link to="/" className="error404__link">Retourner sur la page d'accueil</Link>
        </div>
    );
};

export default Error404;
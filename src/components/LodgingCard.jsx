import { Link } from "react-router-dom";

const LodgingCard = ({ id, cover, title }) => {
    return (
        <div className="lodging-card">
            <Link key={id} to={"/lodging/" + id} className="lodging-card__link">
                <div className="lodging-card__overlay"></div>
                <img src={cover} alt="Preview du logement" className="lodging-card__cover" />
                <h3 className="lodging-card__title">{title}</h3>
            </Link>
        </div>

    );
};

export default LodgingCard;
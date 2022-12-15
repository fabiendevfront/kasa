import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import Owner from "../components/Owner";
import Tag from "../components/Tag";
import Star from "../components/Star";

const Lodging = () => {

    return (
        <div className="lodging">
            <Carousel />
            <h2 className="lodging__title">Titre</h2>
            <Owner />
            <h3 className="lodging__location">Localisation</h3>
            <Tag />
            <Star />
            <Dropdown />
            <Dropdown />
        </div>
    );
};

export default Lodging;
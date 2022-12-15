import { useState } from "react";
import arrowVertical from "../assets/arrow_vertical.svg";

const Dropdown = ({ title, txt }) => {

    const [toggle, setToggle] = useState(false);

    const toggleDropdown = () => {
        setToggle(!toggle);
    };

    return (
        <div className={toggle ? "dropdown dropdown--active" : "dropdown"} onClick={toggleDropdown}>
            <div className="dropdown__header">
                <h2 className="dropdown__title">{title}</h2>
                <img src={arrowVertical} alt="Fleche d'ouverture du dropdown" className="dropdown__arrow" />
            </div>
            <div className="dropdown__content">
                <p className="dropdown__txt">{txt}</p>
            </div>
        </div>
    );
};

export default Dropdown;
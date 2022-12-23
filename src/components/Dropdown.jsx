import { useState } from "react";
import arrowVertical from "../assets/arrow_vertical.svg";

/**
 * Component for Dropdown
 * @param {string} props.title - The title for the dropdown.
 * @param {string} props.txt - The text for the dropdown.
 * @returns A React component.
 */
const Dropdown = ({ title, txt }) => {
    /* Create a State Hook */
    const [toggle, setToggle] = useState(false);

    /**
   * Toggle the dropdown open or closed.
   */
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
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import aboutBanner from "../assets/about.png";
import Dropdown from "../components/Dropdown";

/**
 * Component for About Page
 * @returns A React component
 */

const About = () => {
    /* Create a State Hook */
    const [dropdownData, setDropdownData] = useState();
    const [dropdownError, setDropdownError] = useState(false);

    /**
     * Effect Hook that performs an action when the component is mounted and/or when its dependencies change.
    */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/dropdown.json");
                const data = await response.json();
                setDropdownData(data);
            } catch (error) {
                console.error(error);
                setDropdownError(true);
            }
        };
        fetchData();
    }, []);

    if (dropdownError) {
        return <span>Erreur de connexion à la base de données</span>;
    }

    return (
        <>
            {dropdownData && (
                <div className="about">
                    <div className="about__banner">
                        <Banner img={aboutBanner} />
                    </div>
                    <div className="about__dropdowns">
                        {dropdownData.map((dropdown) =>
                            <Dropdown key={dropdown.id} title={dropdown.title} txt={dropdown.txt} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default About;

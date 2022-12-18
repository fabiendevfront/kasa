import dropdownsData from "../data/dropdownData.json";
import Banner from "../components/Banner";
import aboutBanner from "../assets/about.png";
import Dropdown from "../components/Dropdown";

const About = () => {
    return (
        <div className="about">
            <div className="about__banner">
                <Banner img={aboutBanner} />
            </div>
            <div className="about__dropdowns">
                {dropdownsData.map((dropdown) =>
                    <Dropdown key={dropdown.id} title={dropdown.title} txt={dropdown.txt} />
                )}
            </div>
        </div>
    );
};

export default About;

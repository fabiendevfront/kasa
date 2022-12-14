import Banner from "../components/Banner";
import aboutBanner from "../assets/about.png";
import Dropdown from "../components/Dropdown";

const About = () => {
    const dropdownsData = [
        {
            id: "0",
            title: "Fiabilité",
            txt: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            id: "1",
            title: "Respect",
            txt: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            id: "2",
            title: "Service",
            txt: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            id: "3",
            title: "Securité",
            txt: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ];
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

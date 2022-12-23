// import lodgings from "../data/lodgings.json";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import homeBanner from "../assets/home.png";
import LodgingCard from "../components/LodgingCard";

/**
 * Component for Home Page
 * @returns A React component.
 */
const Home = () => {
    /* Create a State Hook */
    const [lodgings, setlodgings] = useState();
    const [lodgingsError, setLodgingsError] = useState(false);

    /**
     * Effect Hook that performs an action when the component is mounted and/or when its dependencies change.
    */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/data/lodgings.json");
                const data = await response.json();
                setlodgings(data);
            } catch (error) {
                console.error(error);
                setLodgingsError(true);
            }
        };
        fetchData();
    }, []);

    if (lodgingsError) {
        return <span>Erreur de connexion à la base de données</span>;
    }

    return (
        <>
            {lodgings && (
                <div className="home">
                    <div className="home__banner">
                        <Banner img={homeBanner} txt="Chez vous, partout et ailleurs" />
                    </div>
                    <div className="home__lodgings">
                        {lodgings.map((lodging) =>
                            <LodgingCard key={lodging.id} id={lodging.id} cover={lodging.cover} title={lodging.title} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
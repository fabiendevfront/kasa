import lodgings from "../data/lodgings.json";
import Banner from "../components/Banner";
import homeBanner from "../assets/home.png";
import LodgingCard from "../components/LodgingCard";

/**
 * Component for Home Page
 * @returns A React component.
 */
const Home = () => {
    return (
        <div className="home">
            <div className="home__banner">
                <Banner img={homeBanner} txt="Chez vous, partout et ailleurs" />
            </div>
            <div className="home__lodgings">
                {lodgings.map((lodging) =>
                    <LodgingCard key={lodging.id} id={lodging.id} cover={lodging.cover} title={lodging.title} />
                )}
            </div>
        </div >
    );
};

export default Home;
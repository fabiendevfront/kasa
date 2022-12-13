import lodgings from "../data/lodgings.json";
import Banner from "../components/Banner";
import LodgingCard from "../components/LodgingCard";

const Home = () => {
    return (
        <div className="home">
            <div className="home__banner">
                <Banner />
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
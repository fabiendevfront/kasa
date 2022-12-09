import Banner from "../components/Banner";
import lodgings from "../data/lodgings.json";

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <div className="home__lodgings">
                {lodgings.map((lodging) => console.log(lodging))}
            </div>
        </div>
    );
};

export default Home;
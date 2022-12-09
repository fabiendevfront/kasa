import bannerimg from "../assets/home.png";

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerimg} alt="Visuel de la bannière" className="banner__img" />
        </div>
    );
};

export default Banner;
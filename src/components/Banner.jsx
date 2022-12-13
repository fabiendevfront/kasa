import bannerImg from "../assets/home.png";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__overlay"></div>
            <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
            <img src={bannerImg} alt="Visuel de la bannière" className="banner__img" />
        </div>
    );
};

export default Banner;
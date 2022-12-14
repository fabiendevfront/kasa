const Banner = ({ img, txt }) => {
    return (
        <div className="banner">
            <div className="banner__overlay"></div>
            {txt ? <h2 className="banner__title">{txt}</h2> : ""}
            <img src={img} alt="Visuel de la bannière" className="banner__img" />
        </div>
    );
};

export default Banner;
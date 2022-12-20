/**
 * Component for Banner
 * @param {string} props.img - The URL for the banner image.
 * @param {string} [props.txt] - The text to display in the banner.
 * @returns A React component.
 */
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
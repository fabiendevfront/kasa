import starSvg from "../assets/star.svg";

/**
 * Component for Star
 * @param {number} props.rating - The rating for the star component.
 * @returns A React component.
 */
const Star = ({ rating }) => {
    const stars = [];
    const max = 5;

    for (let i = 0; i < max; i++) {
        stars.push(<span key={`star ${i}`} className={i < rating ? "star__item star__item--filled" : "star__item star__item--empty"}>
            <svg width="30" height="30"><use xlinkHref={starSvg + "#starSvg"}></use></svg>
        </span>);
    }
    return (
        <div className="star">{stars}</div>
    );
};

export default Star;
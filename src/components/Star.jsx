import starSvg from "../assets/star.svg";

const Star = ({ rating }) => {
    const stars = [];
    const max = 5;

    for (let i = 0; i < max; i++) {
        stars.push(<span key={`star ${i}`} className={i < rating ? "star__item star__item--filled" : "stars__item star__item--empty"}><svg width="30" height="30"><use xlinkHref={starSvg + "#starSvg"}></use></svg></span>);
    }
    console.log(rating);
    return (
        <div className="star">{stars}</div>
    );
};

export default Star;
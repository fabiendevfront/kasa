import { useParams, Navigate } from "react-router-dom";
import lodgings from "../data/lodgings.json";
import Carousel from "../components/Carousel";
import Dropdown from "../components/Dropdown";
import Owner from "../components/Owner";
import Tag from "../components/Tag";
import Star from "../components/Star";

/**
 * Component for Lodging Page
 * @returns A React component
 */
const Lodging = () => {
    /* Get the lodging's ID in the URL */
    const params = useParams();
    const lodgingInfos = lodgings.filter(lodging => lodging.id === params.id)[0];

    const tags = lodgingInfos.tags.map((tags, index) => {
        return <Tag key={index} txt={tags} />;
    });

    const equipments = lodgingInfos.equipments.map((equipment, index) => {
        return <span key={index}>{equipment}</span>;
    });

    return (
        <>
            {
                lodgingInfos ? (
                    <div className="lodging">
                        <Carousel pictures={lodgingInfos.pictures} />
                        <div className="lodging__description">
                            <div className="lodging__infos">
                                <h2 className="lodging__title">{lodgingInfos.title}</h2>
                                <h3 className="lodging__location">{lodgingInfos.location}</h3>
                                <div className="lodging__tags">
                                    {tags}
                                </div>
                            </div>
                            <div className="lodging__details">
                                <div className="lodging__owner">
                                    <Owner host={lodgingInfos.host} />
                                </div>
                                <Star rating={lodgingInfos.rating} />
                            </div>
                        </div>
                        <div className="lodging__dropdowns">
                            <Dropdown title="Description" txt={lodgingInfos.description} />
                            <Dropdown title="Équipements" txt={equipments} />
                        </div>
                    </div>
                ) : (<Navigate replace to="/404" />)
            }
        </>
    );
};

export default Lodging;
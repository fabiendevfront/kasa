import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    /* Create a State Hook */
    const [lodgingData, setLodgingData] = useState();
    const [lodgingError, setLodgingError] = useState(false);

    /**
     * Effect Hook that performs an action when the component is mounted and/or when its dependencies change.
    */
    useEffect(() => {
        const getLodging = async () => {
            try {
                const response = await fetch("/data/lodgings.json");
                const lodgingList = await response.json();
                // Filter the lodgings by the id of the url
                const lodgingInfo = lodgingList.filter(lodging => lodging.id === params.id)[0];
                if (lodgingInfo) {
                    setLodgingData(lodgingInfo);
                } else {
                    navigate("/error404");
                }
            } catch (error) {
                console.error(error);
                setLodgingError(true);
            }
        };
        getLodging();
    }, [params, navigate]);

    if (lodgingError) {
        return <span>Erreur de connexion à la base de données</span>;
    }

    return (
        <>
            {lodgingData && (
                <div className="lodging">
                    <Carousel pictures={lodgingData.pictures} />
                    <div className="lodging__description">
                        <div className="lodging__infos">
                            <h2 className="lodging__title">{lodgingData.title}</h2>
                            <h3 className="lodging__location">{lodgingData.location}</h3>
                            <div className="lodging__tags">
                                {lodgingData.tags.map((tags, index) =>
                                    <Tag key={index} txt={tags} />
                                )}
                            </div>
                        </div>
                        <div className="lodging__details">
                            <div className="lodging__owner">
                                <Owner host={lodgingData.host} />
                            </div>
                            <Star rating={lodgingData.rating} />
                        </div>
                    </div>
                    <div className="lodging__dropdowns">
                        <Dropdown title="Description" txt={lodgingData.description} />
                        <Dropdown title="Équipements" txt={lodgingData.equipments.map((equipment, index) =>
                            <span key={index}>{equipment}</span>
                        )} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Lodging;
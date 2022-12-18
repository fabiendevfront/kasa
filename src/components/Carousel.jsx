import { useState } from "react";
import arrow from "../assets/arrow_horizontal.svg";

const Carousel = ({ pictures }) => {

    let [show, setShow] = useState(0);
    let indexPictures = pictures.length;

    const previous = () => {
        if (show === 0) {
            setShow(indexPictures - 1);
        } else {
            setShow(show - 1);
        }
        return (setShow);
    };

    const next = () => {
        if (show === indexPictures - 1) {
            setShow(indexPictures = 0);
        } else {
            setShow(show + 1);
        }
        return (setShow);
    };

    return (
        <div className="carousel">
            {pictures.map((picture, index) => {
                return (
                    <img key={index} className={index === show ? "carousel__picture carousel__picture--active" : "carousel__picture"} src={picture} alt="Visuel de la location" />
                );
            })
            }
            <img className="carousel__arrow carousel__arrow--left" src={arrow} alt="Précedente" onClick={previous} />
            <img className="carousel__arrow carousel__arrow--right" src={arrow} alt="Suivante" onClick={next} />
            <span className="carousel__count">{`${show + 1} / ${indexPictures}`}</span>
        </div>
    );
};

export default Carousel;
import { useState } from "react";
import arrow from "../assets/arrow_horizontal.svg";

/**
 * Component for Banner
 * @param {string[]} props.pictures - The URLs for the pictures in the carousel.
 * @returns A React component.
 */
const Carousel = ({ pictures }) => {
    /* Create a State Hook */
    let [show, setShow] = useState(0);
    let indexPictures = pictures.length;

    /**
   * Sets the state to show the previous picture in the carousel.
   * If the first picture is already showing, shows the last picture.
   */
    const previous = () => {
        if (show === 0) {
            setShow(indexPictures - 1);
        } else {
            setShow(show - 1);
        }
        return (setShow);
    };

    /**
   * Sets the state to show the next picture in the carousel.
   * If the last picture is already showing, shows the first picture.
   */
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
            {pictures.map((picture, index) =>
                <img key={index} className={index === show ? "carousel__picture carousel__picture--active" : "carousel__picture"} src={picture} alt="Visuel de la location" />
            )}
            {indexPictures > 1 && (
                <>
                    <img className="carousel__arrow carousel__arrow--left" src={arrow} alt="Précedente" onClick={previous} />
                    <img className="carousel__arrow carousel__arrow--right" src={arrow} alt="Suivante" onClick={next} />
                    <span className="carousel__count">{`${show + 1} / ${indexPictures}`}</span>
                </>
            )}
        </div>
    );
};

export default Carousel;
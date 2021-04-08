import React, { useState } from 'react';
import { carouselData } from './carouselData';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './Carousel.css'

const Carousel = ({ slides }) => {
    const [currentPic, setCurrentPic] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentPic(currentPic === length - 1 ? 0 : currentPic + 1)
    }

    const prevSlide = () => {
        setCurrentPic(currentPic === 0 ? length - 1 : currentPic - 1)
    }


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {carouselData.map((slide, index) => {
                return (
                    <div className={index === currentPic ? 'slide active' : 'slide'} key={index}>
                        {index === currentPic && (<img src={slide.image} alt="bag" className="picture" />)}
                    </div>

                );

            })}
        </section>
    )
}

export default Carousel;
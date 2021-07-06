import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Slider.css'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const proxSlide= () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const antSlide= () => {
        setCurrent(current === 0 ? length - 1 : current - 1 )
    }


    if(!Array.isArray(slides) || slides.length <= 0) {
        return ""
    }


    return (
        <div className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={antSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={proxSlide}/>
            {SliderData.map((slide, index) => {


                return(
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} className="image" />)}
                        
                    </div>
                ) 
                ;
            })}
        </div>
    )
};

export default ImageSlider;

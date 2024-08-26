import React from 'react'
import style from './MainSlider.module.css'
import s1 from '../../assets/images/s1.jpeg'
import s2 from '../../assets/images/s2.jpeg'
import Slider from 'react-slick';
import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import slider3 from '../../assets/images/slider-image-3.jpeg'

export default function MainSlider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    };


    return (
        <>
            <div className='flex'>
                <div className="w-3/4">
                    <Slider {...settings}>
                        <img src={slider1} className='w-full h-[400px]' alt="" />
                        <img src={slider2} className='w-full h-[400px]' alt="" />
                        <img src={slider3} className='w-full h-[400px]' alt="" />
                    </Slider>
                </div>
                <div className="w-1/4">
                <img src={s1} className='w-full h-[200px]' alt="" />
                <img src={s2} className='w-full h-[200px]' alt="" />
                </div>
            </div>
        </>
    )
}

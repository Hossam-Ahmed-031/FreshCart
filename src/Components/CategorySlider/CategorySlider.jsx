import React, { useEffect, useState } from 'react'
import style from './CategorySlider.module.css'
import Slider from "react-slick";
import axios from 'axios';

export default function CategorySlider() {

    const [categories, setCategories] = useState([])

    async function getRecentcategories() {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)

            console.log(data.data);
            setCategories(data.data);

        } catch (error) {
            console.log(error);

        }

    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    };



    useEffect(() => {
        // component did mount
        getRecentcategories();
    }, [])



    return (
        <>
            <Slider {...settings}>
                {categories?.map((category, index) => <div key={index} className='mt-5'>
                    <img src={category.image} className='w-full h-[200px] ' alt='' />
                    <h3>{category.name}</h3>
                </div>)}
            </Slider>
        </>
    )
}

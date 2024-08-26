import React, { useEffect, useState } from 'react';
import style from './RelatedProducts.module.css';
import axios from 'axios';
import Slider from 'react-slick';
import Loading from '../Loading/Loading';

export default function RelatedProducts({ category }) {
    const [products, setProducts] = useState([]);

    // Function to fetch products by category
    async function getProducts() {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${category}`);
            setProducts(data.data);
            console.log(data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (category) {
            getProducts();
        }
    }, [category]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500
    };

    return (
        <>
            <div>
                <h2 className="text-5xl py-8 text-center text-emerald-600">Related Products</h2>
                <div className="btn p-5">
                    {products.length ? <Slider {...settings}>
                        {products.map((product) => (
                            <div key={product._id} className="border p-4 rounded-md btn">
                                <img src={product.images[0]} alt={product.title} className="w-full object-cover h-[300px]" />
                                <h3 className="mt-2 text-lg">{product.title.split(' ').slice(0, 2).join(' ')}</h3>
                                {/* <p className="text-gray-500">{product.price} EGP</p> */}
                            </div>
                        ))}
                    </Slider> : <div className="flex justify-center py-20">
                        <Loading />
                    </div>}
                </div>
            </div>
        </>
    );
}

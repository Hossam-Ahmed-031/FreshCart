import React, { useContext, useEffect, useState } from 'react';
import style from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { CartContext } from '../../Context/CartContext';
import { WishlistContext } from '../../Context/WhishlistContexet';

export default function ProductDetails() {
    const [productDetails, setProductDetails] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    let {addProductsToWishlist}= useContext(WishlistContext)
    let { addProductToCart } = useContext(CartContext)
    let { id } = useParams();

    // Function to fetch related products based on category ID
    async function getRelatedProducts(categoryId) {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}&limit=4`);
            setRelatedProducts(data.data);
        } catch (error) {
            console.error("Error fetching related products:", error);
        }
    }

    // Function to fetch product details by ID
    async function getProdcutDetails(id) {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
            setProductDetails(data.data);

            // Fetch related products based on category
            getRelatedProducts(data.data.category._id);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }

    useEffect(() => {
        getProdcutDetails(id);
    }, [id]); // Ensure the useEffect re-runs when the id changes

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500
    };

    return (
        <>
            <h2 className='text-5xl py-8 text-center text-emerald-600'>Product Details</h2>
            <div className="flex items-center py-10">
                <div className='w-1/4 p-4'>
                    <Slider {...settings}>
                        {productDetails.images?.map((image, index) => (
                            <img key={index} src={image} className='w-full' alt='' />
                        ))}
                    </Slider>
                </div>
                <div className='w-3/4'>
                    <div>
                        <h2>{productDetails.title}</h2>
                        <p className='my-6 text-gray-500'>{productDetails.description}</p>
                        <h3>{productDetails.category?.name}</h3>
                        <div className="flex justify-between my-2">
                            <h3>{productDetails.price} EGP</h3>
                            <h3><i className='fas fa-star rating-color'></i> {productDetails.ratingsAverage}</h3>
                        </div>

                        <div className='flex flex-wrap justify-between'>
                            <div className='w-3/4'>
                                <button onClick={() => addProductToCart(productDetails.id)} className=' btn w-full bg-main text-white rounded-md py-1'>Add TO Cart</button>

                            </div>
                            <div className='w-1/4 text-center text-3xl'>
                                <button onClick={() => addProductsToWishlist(productDetails.id)}><i className="fa-solid fa-heart"></i></button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* Render the RelatedProducts component */}
            <RelatedProducts category={productDetails.category?._id} />
        </>
    );
}

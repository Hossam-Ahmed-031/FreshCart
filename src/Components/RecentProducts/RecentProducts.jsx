import React, { useContext } from 'react'
import style from './RecentProducts.module.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import {  WishlistContext } from '../../Context/WhishlistContexet'

export default function RecentProducts({ product }) {
    let { addProductToCart } = useContext(CartContext)
    let { addProductsToWishlist } = useContext(WishlistContext)



    return (
        <>

            <div className="w-1/2 px-4 md:w-1/4 xl:w-1/5 product md:px-3 py-5">
                <div>
                    <Link to={`/productdetails/${product.id}`}>
                        <img src={product.imageCover} className='w-full' alt={product.title} />
                        <h2 className='text-main text-sm'>{product.category.name}</h2>
                        <h2 className='font-medium'>{product.title.split(' ').slice(0, 2).join(' ')}</h2>
                        <div className="flex justify-between my-2">
                            <h3>{product.price} EGP</h3>
                            <h3><i className='fas fa-star rating-color'></i> {product.ratingsAverage}</h3>
                        </div>
                    </Link>
                    <div className='flex flex-wrap items-center justify-between btn'>
                        <div className='w-3/4'>
                            <button onClick={() => addProductToCart(product.id)} className=' w-full bg-main text-white rounded-md py-1'>Add TO Cart</button>
                        </div>



                        <div className='w-1/4 text-center text-3xl'>
                            <button onClick={() => addProductsToWishlist(product.id)}><i className="fa-solid fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React, { useContext, useEffect, useState } from 'react'
import style from './Whishlist.module.css'
import { WishlistContext } from '../../Context/WhishlistContexet'
import Loading from '../Loading/Loading'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export default function Whishlist() {
    let neavigate = useNavigate()


    let { getProductsToWishlist, whishlist, loading, setWhishlist, deleteProduct } = useContext(WishlistContext)
    let { addProductToCart } = useContext(CartContext)

    useEffect(() => {
        setWhishlist();
        getProductsToWishlist()
    }, []);

    useEffect(() => {
        getProductsToWishlist()
    }, [whishlist])

    const isCartEmpty = !whishlist || (whishlist.data && whishlist.data.length === 0);






    return (
        <>
            <h2 className="text-5xl py-8 text-center text-emerald-600">Whish List</h2>

            {!whishlist ? <div className='flex flex-wrap justify-center'><Loading /></div> : <div>


                <div className="relative w-3/4 mx-auto overflow-x-auto shadow-md sm:rounded-lg">
                    {whishlist.data.length < 1 ? <section class="bg-white">
                        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div class="mx-auto max-w-screen-sm text-center">
                                <p class="mb-4 text-3xl tracking-tight font-bold  md:text-4xl text-emerald-500 ">Whish List IS Empty</p>
                                <Link to={'/'} class="bg-emerald-500  inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
                            </div>
                        </div>
                    </section> : <div>

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-16 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {whishlist.data.map((prodcut,) => <tr key={prodcut.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4">
                                        <img src={prodcut.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {prodcut.title}
                                    </td>

                                    <td className="px-3 py-4 font-semibold text-gray-900 dark:text-white">
                                        {prodcut.price} EGP
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => deleteProduct(prodcut.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => addProductToCart(prodcut.id)} className=" font-medium text-emerald-600 dark:text-emerald-500 hover:underline">Add To Cart</button>
                                    </td>
                                </tr>)}

                            </tbody>
                        </table>
                    </div>}
                </div>



            </div>}



        </>
    );
}

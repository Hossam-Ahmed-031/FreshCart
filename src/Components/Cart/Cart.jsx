import React, { useContext, useEffect } from 'react';
import style from './Cart.module.css';
import { CartContext } from '../../Context/CartContext';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

export default function Cart() {
    const { getCart, cart, updateProductCount, loading, deleteProduct } = useContext(CartContext);

    useEffect(() => {
        getCart();
    }, []);

    if (loading) {
        return <div className="flex justify-center"><Loading /></div>;
    }

    const isCartEmpty = !cart || (cart.data.products && cart.data.products.length === 0);

    return (
        <>
            <h2 className="text-5xl py-8 text-center text-emerald-600">Cart</h2>

            {!isCartEmpty ? <>
                <div className="relative overflow-x-auto w-3/4 mx-auto shadow-md sm:rounded-lg">
                    <table className="w-full mb-2 text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr>
                                <th scope="col" className="px-16 py-3">Image</th>
                                <th scope="col" className="px-6 py-3">Product</th>
                                <th scope="col" className="px-6 py-3">Qty</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.data.products.map((product, index) => (
                                <tr key={index} className="bg-white border-b hover:bg-gray-50 ">
                                    <td className="p-4">
                                        <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                                        {product.product.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <button onClick={() => updateProductCount(product.product.id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100">
                                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <span>{product.count}</span>
                                            <button onClick={() => updateProductCount(product.product.id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100">
                                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-3 py-4 font-semibold text-gray-900 ">
                                        {product.price * product.count} EGP
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => deleteProduct(product.product.id)} className="font-medium text-red-600 hover:underline">Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="text-xl font-semibold text-black my-2">
                                <td className='text-center' colSpan={3}>Total Cart Price</td>
                                <td className='text-center'>{cart.data.totalCartPrice} <span className='text-red-500'>EGP</span></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="text-center my-10 w-3/4 mx-auto sm:rounded-lg">
                    <Link to="/checkout" className="bg-main flex justify-center items-center gap-5 text-center text-4xl text-white px-20 py-2 m-2 rounded-md hover:text-slate-200">
                        Check out <i className="fa-solid fa-face-smile-wink"></i>
                    </Link>
                </div>
                </> : (
                <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">YOUR CART IS EMPTY</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">Prodcuts You Want to Buy Apper Here Try to buy somthing<i className="fa-solid fa-face-smile-wink pl-5"></i></p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/"
                                className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                            >
                                Go back home
                            </Link>

                        </div>
                    </div>
                </main>
            )}


        </>
    );
}

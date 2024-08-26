import React, { useContext, useState } from 'react';
import style from './Navbar.module.css'; // Assuming you have some styles here
import logo from '../../assets/images/freshcart-logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { CounterContext } from '../../Context/CounterContext';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';

export default function Navbar() {
    let navigate = useNavigate();
    let { userData, setUserData } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let { cart } = useContext(CartContext)

    function logout() {
        localStorage.removeItem("userToken");
        setUserData(null);
        navigate('/login');
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='bg-gray-200 py-2 capitalize text-center z-30 static  md:fixed top-0 left-0 right-0 text-slate-500'>


            <div className="container flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto">
                <div className='flex justify-between items-center w-full md:w-auto'>
                    <img src={logo} width='120px' alt="Logo" />
                    <button
                        className="md:hidden text-xl focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>

                <div className={`md:flex  flex-col md:flex-row md:items-center md:justify-between w-fit md:w-full  transition-all duration-300 ease-in ${isMenuOpen ? 'block' : 'hidden'}`}>
                    {userData && (
                        <ul className='flex flex-col md:flex-row items-center w-full text-center justify-center   md:space-x-4'>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="products">Products</NavLink></li>
                            <li><NavLink to="category">Categories</NavLink></li>
                            <li><NavLink to="brands">Brands</NavLink></li>
                        </ul>
                    )}

                    <ul className='flex flex-col md:flex-row items-center md:space-x-4 mt-2 md:mt-0 justify-end w-full '>


                        {/* {cart.numOfCartItems} */}
                        {userData ? <>
                            <li className='relative'><NavLink to="wishlist"><i className="fa-solid fa-heart text-2xl text-red-500"><span>Whish</span></i></NavLink></li>
                            <li className='relative'><NavLink to="cart"><i className="fa-solid fa-cart-shopping text-4xl text-main"></i></NavLink><span className='text-white absolute left-1/2 '>{cart ? cart.numOfCartItems : 0}</span></li>
                            <li onClick={logout} className='mx-2 cursor-pointer'><span>LogOut</span></li>
                        </>
                            : (
                                <>

                                    <li><NavLink to="login">Login</NavLink></li>
                                    <li><NavLink to="register">Register</NavLink></li>
                                </>
                            )}

                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

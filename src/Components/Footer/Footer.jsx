import React from 'react'
import style from './Footer.module.css'


export default function Footer() {




    return (
        <>
            <div className="footer bg-[#f0f3f2] py-10 mt-20">
                <div className="container mx-auto w-11/12">
                    <div>
                        <div>
                            <h1 className='font-thin text-3xl'>Get the FreshCart app</h1>
                            <p className=' font-light mt-2'>We will send you a link, open it on your phone to download the app.</p>
                            {/* form */}
                            <div className='my-5 mx-auto'>
                                <form >
                                    <div className="flex flex-wrap justify-around items-center  content-center flex-col md:flex-row">
                                    <div className="mb-5 w-full md:w-9/12">
                                        <input type="email" id="email" className="shadow-sm bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5  dark:shadow-sm-light" placeholder="Email..." required />
                                    </div>
                                    <div className='mb-5 w-full md:w-2/12'>
                                        <button className='bg-emerald-500 w-full text-white hover:text-black px-10 py-3 rounded-md'>Share App Link</button>
                                    </div>
                                    </div>
                                </form>
                            </div>
                            {/* foooter last sec */}
                            <div className='flex flex-wrap items-center  md:justify-between py-10 border-y-2 flex-col xl:flex-row gap-10 '>
                                <div className='flex flex-wrap items-center gap-x-7 text-3xl justify-center'>
                                    <span>Payment Partners</span>
                                    <i className="fa-brands fa-cc-amazon-pay hover:text-emerald-600"></i>
                                    <i className="fa-solid fa-globe hover:text-emerald-600"></i>
                                    <i className="fa-brands fa-cc-mastercard hover:text-emerald-600"></i>
                                    <i className="fa-brands fa-cc-paypal hover:text-emerald-600"></i>

                                </div>
                                <div className='flex flex-wrap items-center gap-x-7 text-3xl justify-center'>
                                    <span>Get deliveries with FreshCart</span>
                                    <i className="fa-brands fa-google-play hover:text-emerald-600"></i>
                                    <i className="fab fa-app-store hover:text-emerald-600"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

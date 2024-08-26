import React from 'react'
import style from './RecentBrands.module.css'

export default function RecentBrands({ brand }) {


    



    return (
        <>
            <div className="w-1/2 px-4 md:w-1/4 xl:w-1/5 product md:px-3 py-5 text-center">
                <div>
                    <img src={brand.brand.image} className='w-full' alt={brand.title} />
                    <h2 className='text-main text-sm'>{brand.brand.name}</h2>
                    {/* <h2 className='font-medium'>{brand.brand.slug}</h2> */}
                    {/* <button className='btn w-full bg-main text-white rounded-md py-1'>Add TO Cart</button> */}
                </div>
            </div>
        </>
    )
}

import React from 'react'
import style from './RecentCategory.module.css'

export default function RecentCategory({ category }) {




    return (
        <>
            <div className="w-1/2 px-4 md:w-1/4  product md:px-3 py-5 text-center">
                <div>
                    <img src={category.category.image} className='w-full' alt={category.category.name} />
                    <h2 className='text-main text-3xl py-5'>{category.category.name}</h2>
                    {/* <h2 className='font-medium'>{category.category.slug}</h2> */}
                    {/* <button className='btn w-full bg-main text-white rounded-md py-1'>Add TO Cart</button> */}
                </div>
            </div>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import style from './Category.module.css'
import axios from 'axios'
import RecentCategory from '../RecentCategory/RecentCategory'
import Loading from '../Loading/Loading'

export default function Category() {
    const [products, setProducts] = useState([])


    async function getProducts() {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            setProducts(data.data)
        }
        catch (err) {
            console.log(err);

        }
    }

    const uniqueCategories = products.filter((product, index, self) =>
        index === self.findIndex((p) => (
            p.category.name === product.category.name
        ))
    );

    useEffect(() => {
        getProducts()
    }, [])




    return (
        <>
            <h2 className='text-5xl py-8 text-center text-emerald-600'>All Categories</h2>
            {uniqueCategories.length ? <div className="flex flex-wrap justify-center">
                {uniqueCategories.map((category, index) => <RecentCategory key={index} category={category} />)}
            </div> : <div className="flex justify-center py-20">
            <Loading/>
            </div>}


        </>
    )
}
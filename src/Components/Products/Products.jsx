import React, { useEffect, useState } from 'react'
import style from './Products.module.css'
import axios from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts'
import Loading from '../Loading/Loading'

export default function Products() {
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

    useEffect(() => {
        getProducts()
    }, [])




    return (
        <>

            <h2 className='text-5xl py-8 text-center text-emerald-600'>All Products</h2>
            {products.length ? <div className="flex flex-wrap justify-center">
                {products.map((product, index) => <RecentProducts key={index} product={product} />)}
            </div> : <div className="flex justify-center py-20">
            <Loading/>
            </div>}


        </>
    )
}

import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import RecentBrands from '../RecentBrands/RecentBrands'
import axios from 'axios'
import Loading from '../Loading/Loading'

export default function Brands() {
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

    const uniqueBrands = products.filter((product, index, self) =>
        index === self.findIndex((p) => (
            p.brand.name === product.brand.name
        ))
    );

    useEffect(() => {
        getProducts()
    }, [])




    return (
        <>
            <h2 className='text-5xl py-8 text-center text-emerald-600'>All Brands</h2>
            {uniqueBrands.length ? <div className="flex flex-wrap justify-center">
                {uniqueBrands.map((brand, index) => <RecentBrands key={index} brand={brand} />)}

            </div> : <div className="flex justify-center py-20">
            <Loading/>
            </div>}

        </>
    )
}


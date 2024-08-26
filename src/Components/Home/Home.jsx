import React, { useContext, useEffect, useState } from 'react'
import style from './Home.module.css'
import { CounterContext } from '../../Context/CounterContext'
import axios from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts'
import Loading from '../Loading/Loading'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'


export default function Home() {
    const [products, setProducts] = useState([])

    async function getRecentProducts() {
        try {
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

            console.log(data.data);
            setProducts(data.data);

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        // component did mount
        getRecentProducts();
    }, [])


    return (
        <>

            <MainSlider />
            <CategorySlider />

            <h2 className='text-5xl py-8 text-center text-emerald-600'>Recent Products</h2>
            {products.length ? <div className="flex flex-wrap justify-center">
                {products.map((product, index) => <RecentProducts key={index} product={product} />)}

            </div> : <div className="flex justify-center py-20">
                <Loading />
            </div>}

        </>
    )
}

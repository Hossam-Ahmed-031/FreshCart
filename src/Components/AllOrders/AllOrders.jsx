import React, { useContext, useEffect } from 'react'
import style from './AllOrders.module.css'
import { CartContext } from '../../Context/CartContext'

export default function AllOrders() {
    let { clearCart } = useContext(CartContext)


    useEffect(() => {
        clearCart()
    }, [])



    return (
        <>
            <h2 className='text-5xl py-8 text-center text-emerald-600'>AllOrders</h2>
        </>
    )
}

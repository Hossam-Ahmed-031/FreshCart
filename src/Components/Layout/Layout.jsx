import React, { useContext, useEffect } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext.jsx'
export default function Layout() {

    let { setUserData } = useContext(UserContext)
    let navigate = useNavigate()
    // useEffect(() => {
    //     if (localStorage.getItem("userToken")) {
    //         setUserData(localStorage.getItem("userToken"))
    //     } else {
    //         navigate("/")
    //     }

    // }, [])




    return (
        <>
            <Navbar />

            {/* Routing */}
            <div className="container md:pt-20">
                <Outlet></Outlet>
            </div>


            <Footer />
        </>
    )
}

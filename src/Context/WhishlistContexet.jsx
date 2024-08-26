import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading/Loading";

export const WishlistContext = createContext();

let headers = {
    token: localStorage.getItem("userToken")
}


export default function WishlistContextProvider({ children }) {
    const [whishlist, setWhishlist] = useState(null)
    const [loading, setLoading] = useState(false)


    async function addProductsToWishlist(productId) {

        try {
            setLoading(true)
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                productId
            }, {
                headers
            });
            console.log(data);
            toast.success(data.message, {
                duration: 1500,
                position: 'top-center',
            });
            setWhishlist(data)
            setLoading(false)

        }
        catch (err) {
            console.log(err);
            setLoading(false)

        }




    }

    async function getProductsToWishlist() {
        try {
            setLoading(true)
            let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
                headers
            });
            console.log(data);

            setWhishlist(data)
            setLoading(false)

        }
        catch (err) {
            console.log(err);
            setLoading(false)


        }


    }

    async function deleteProduct(productId) {

        try {
            setLoading(true)
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
                headers
            });
            console.log(data);
            setWhishlist(data)
            setLoading(false)

        }
        catch (err) {
            console.log(err);
            setLoading(false)

        }




    }
   


    useEffect(() => {
        setWhishlist()
    }, [])
    
    










   

   


    
    





    return (
        <WishlistContext.Provider value={{ deleteProduct, addProductsToWishlist, getProductsToWishlist, whishlist, setWhishlist, loading}}>
            {children}
        </WishlistContext.Provider>
    );

}
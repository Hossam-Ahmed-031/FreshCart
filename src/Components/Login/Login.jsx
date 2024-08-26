import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import style from './Login.module.css'; // Assuming you have a CSS module for styling

export default function Login() {
    const { setUserData } = useContext(UserContext);
    const [apiError, setApiError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleLogin(values) {
        try {
            setLoading(true);
            const { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values);

            // Save user token
            localStorage.setItem("userToken", data.token);

            // Set user data in context
            setUserData(data.token);

            // Navigate to home
            navigate("/");

        } catch (err) {
            setApiError(err.response ? err.response.data.message : "Login failed");
            setLoading(false);
        }
    }

    // Validation schema with Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email Invalid, ex: example@example.com").required("Email is required"),
        password: Yup.string().matches(/^[A-Z]\w{5,10}$/, "Password is invalid, ex: Hossam123").required("Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: handleLogin,
    });

    return (
        <div className={`${style.container} pt-8 w-1/2 mx-auto`}>
            <h2 className="text-3xl py-6 font-semibold">Login Now</h2>
            {apiError && (
                <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    {apiError}
                </div>
            )}
            <form onSubmit={formik.handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer focus:text-black"
                        placeholder=" "
                    />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500">
                        Enter Your Email
                    </label>
                </div>
                {formik.errors.email && formik.touched.email && (
                    <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        {formik.errors.email}
                    </div>
                )}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        id="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer focus:text-black"
                        placeholder=" "
                    />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500">
                        Enter Your Password
                    </label>
                </div>
                {formik.errors.password && formik.touched.password && (
                    <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        {formik.errors.password}
                    </div>
                )}

                <div className="flex flex-wrap justify-between items-center">
                    <div>
                        {loading ? (
                            <button type="button" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-md w-full sm:w-auto px-3 py-1.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                                <i className="fas fa-spinner fa-spin-pulse"></i>
                            </button>
                        ) : (
                            <button type="submit" className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                                Submit
                            </button>
                        )}
                    </div>

                    <div>
                        <Link to="/forgetpassword">Forget Password?</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

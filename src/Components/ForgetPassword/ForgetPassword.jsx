import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords
`, { email });
            setMessage('Reset code sent to your email.');
            navigate('/verifyresetcode')
        } catch (error) {
            setMessage('Failed to send reset code.');
        }
    };

    return (
        <div>
            <h2 className='text-5xl py-8 text-center text-emerald-600'>Forgot Password</h2>
            <form className='flex flex-col justify-center items-center gap-3' onSubmit={handleSubmit}>

                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


                <button className='bg-main px-5 py-2 rounded-md w-1/2 ' type="submit">Send Reset Code</button>
            </form>
            {message && <>
                <p>{message}</p>
                <Link to={'/verifyresetcode'}> Verify Reset Code</Link>

            </>}

        </div>
    );
};

export default ForgotPassword;

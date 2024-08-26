import React, { useState } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';

const VerifyResetCode = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, { data:{
        code
      } });
      console.log(response);
      

      if (response.status === 200) {
        setMessage('Code verified successfully. You can now set a new password.');
        setIsCodeVerified(true);
      } else {
        setMessage('Invalid reset code.');
      }
    } catch (error) {
      console.error('Error verifying reset code:', error.response ? error.response.data : error.message);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div>
      <h2 className='text-5xl py-8 text-center text-emerald-600'>Verify Reset Code</h2>
      <form className='flex flex-wrap flex-col ' onSubmit={handleVerifyCode}>
        
<input type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter reset code"/>

       
        <button  className='bg-black text-white rounded-md w-1/6 mx-auto my-5 py-2' type="submit" disabled={isLoading}>
          {isLoading ? <><Loading/></> : 'Verify Code'}
        </button>
      </form>
      {isCodeVerified ? <p>{message}</p> : <p>{message}</p>}
      
    </div>
  );
};

export default VerifyResetCode;

import React, { useEffect } from 'react';
import logo from '../assets/logo/BFP-OFFICIAL-LOGO.png';

const Login = () => {
  useEffect(() => {
    document.title = 'Login Page';
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white text-black">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center items-center flex-col mb-6">
          <img src={logo} alt="BFP Logo" className="h-50 w-50" />
          <h1 className='mt-2 font-bold text-xl'>BUREAU OF FIRE PROTECTION</h1>
        </div>
        <form>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>
          <button type="submit" className="mt-6 w-full font-bold bg-bfp-orange hover:shadow-lg duration-300 text-white py-2 px-4 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

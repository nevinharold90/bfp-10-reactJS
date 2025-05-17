import React, { useEffect } from 'react';
import BfpLogo from '../assets/logo/BFP-OFFICIAL-LOGO.png';
import Bfp10Logo from '../assets/logo/BFP10.jpg';

import PixelGrid from '../components/PixelGrid'; 

const Login = () => {
  useEffect(() => {
    document.title = 'BFP - LOGIN';
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white text-black">
      <PixelGrid/>
      <div className="relative z-10 w-full max-w-sm p-10 bg-white rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90 items-center justify-center">
        <div className="flex justify-center items-center flex-col mb-5">
          <div className="flex flex-row gap-10 mb-5">
            <img src={BfpLogo} alt="BFP Logo" className="h-36 w-36" />
            <img src={Bfp10Logo} alt="BFP Logo" className="h-35 w-35" />
          </div>
          <h1 className='mt-2 text-center text-bfp-orange font-extrabold text-xl'>
            BUREAU OF FIRE PROTECTION
          </h1>
          <h1 className='mt-2 text-center text-bfp-orange font-extrabold text-2xl'>
            CAGAYAN DE ORO DISTRICT
          </h1>
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
            <label htmlFor="password" className="block  text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>
          <button type="submit" className="mt-6 w-full font-bold bg-bfp-orange hover:shadow-xl hover:bg-bfp-brown duration-300 text-white py-2 px-4 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

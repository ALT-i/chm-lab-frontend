import React from "react";

import Authentication from "../components/Authentication";
import IndexHeader from "../components/IndexHeader";

import loginImg from '../assets/img/home_bg.jpg';

function AuthView () {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='flex flex-col justify-center'>
                <img className='w-full h-full object-cover' src='../assets/img/home_bg.jpg 'alt="" />
                <IndexHeader />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <Authentication />
            </div>
        </div>
     );
}
 
export default AuthView;
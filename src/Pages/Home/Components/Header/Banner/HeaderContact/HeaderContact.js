import React from 'react';
import { BsTelephone } from "react-icons/bs";

const HeaderContact = () => {
    return (
        <div className='flex lg:justify-between text-right'>
            <span className='my-auto rounded-full bg-slate-100 p-5 text-emerald-500 hidden md:block hover:bg-emerald-500 hover:text-white hover:cursor-pointer'><BsTelephone /></span>
            <div className='hidden 2xl:block'>
                <p>+880 00000000</p>
                <small>support 24/7 time</small>
            </div>
        </div>
    );
};

export default HeaderContact;
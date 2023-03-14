import { Button } from 'flowbite-react';
import React from 'react';
import { BsTelephone } from "react-icons/bs";

const Banner = () => {
    return (
        <div className=''>
            <div className='grid md:grid-cols-4 gap-5 mb-5'>
                <div className='md:col-span-3 flex h-14'>
                    <input className='w-full rounded-tl-xl rounded-bl-xl' type="text" name="search" placeholder='What do you want?' />
                    <button className='py-2 px-5 bg-emerald-500 text-white font-bold rounded-br-xl rounded-tr-xl hover:bg-emerald-300'>Search</button>
                </div>
                <div className='flex lg:justify-between text-right'>
                    <span className='my-auto rounded-full bg-slate-100 p-5 text-emerald-500 hidden md:block hover:bg-emerald-500 hover:text-white hover:cursor-pointer'><BsTelephone/></span>
                    <div className='hidden 2xl:block'>
                        <p>+880 00000000</p>
                        <small>support 24/7 time</small>
                    </div>
                </div>
            </div>
            <div className="bg-[url('https://i.ibb.co/b1LvTrY/pexels-lumn-1028599.jpg')] bg-cover lg:h-96 flex items-center h-72">
                <div className='pl-10'>
                    <p className='font-semibold text-emerald-500'>FRESH</p>
                    <h1 className='text-5xl font-bold'>100% <br /> Organic</h1>
                    <p className='my-1'>Free Pickup and Delivery Available</p>
                    <Button className='rounded-none px-5' color="success">Success</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
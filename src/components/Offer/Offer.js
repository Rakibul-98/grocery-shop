import { Button } from 'flowbite-react';
import React from 'react';

const Offer = () => {


    return (
        <div className='grid lg:grid-cols-2 md:w-9/12 w-11/12 mx-auto my-20 gap-10'>
            <div className="bg-[url('https://i.ibb.co/jZLSvWv/pexels-vanessa-loring-5965991.jpg')] h-64 md:h-80 bg-cover flex items-center">
                <div className='px-10'>
                    <h3 className='text-xl font-bold'>Fresh Vegetables</h3>
                    <p className='text-4xl font-bold text-purple-700'>40% OFF</p>
                    <Button className='rounded-none px-5 mt-3 bg-amber-400 hover:bg-amber-500 '>Buy now!!</Button>
                </div>
            </div>
            <div className="bg-[url('https://i.ibb.co/SymvtQw/pexels-vanessa-loring-5965949.jpg')] h-64 md:h-80 bg-cover flex items-center">
                <div className='px-5'>
                    <h3 className='text-xl font-bold'>Dry Fruits</h3>
                    <p className='text-4xl font-bold text-cyan-300'>20% OFF</p>
                    <Button className='rounded-none px-5 mt-3 bg-cyan-400 hover:bg-cyan-500'>Get it now!!</Button>
                </div>
            </div>
        </div>
    );
};

export default Offer;
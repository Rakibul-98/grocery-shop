import React from 'react';
import NavBar from '../Shared/Navbar/NavBar';
import Foot from '../Shared/Footer/Foot';
import useTitle from '../../Title/useTitle';
import OrderSummery from '../OrderSummery/OrderSummery';

const Review = () => {
    useTitle("Review");

    return (
        <div>
            <NavBar />
            <div className='mt-5'>
                <div className='sm:flex justify-between h-[600px]'>
                    <div className='w-10/12 mx-auto'>
                        {/* <div className=' sm:w-10/12 mx-auto'>
                            <div className='flex justify-between font-bold text-2xl'>
                                <h2>Shopping Cart</h2>
                                <h3>Items</h3>
                            </div>
                            <hr className='my-5 h-1'></hr>
                            <div className='flex justify-between'>
                                <div className=''>
                                    products
                                </div>
                                <div>
                                    quantity
                                </div>
                                <div>
                                    Price
                                </div>
                                <div>
                                    Total
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="w-10/12 sm:w-6/12 lg:w-5/12 xl:w-3/12 mx-auto border bg-slate-100">
                        <OrderSummery />
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    );
};

export default Review;
import React from 'react';

const CheckOut = () => {
    return (
        <div className='mt-5'>
            <div className='sm:flex justify-between h-[600px]'>
                <div className='w-10/12 mx-auto'>
                    <div className=' sm:w-10/12 mx-auto'>
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
                    </div>
                </div>
                <div className="w-10/12 sm:w-6/12 lg:w-5/12 xl:w-3/12 mx-auto border bg-slate-100">
                    <h3 className='text-center'>Order Summery</h3>
                    <hr className='my-2 h-1 w-11/12 mx-auto'></hr>
                    <div className='flex justify-between mx-5'>
                        <p>Items <span>3</span></p>
                        <p>$ <span>199.00</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;
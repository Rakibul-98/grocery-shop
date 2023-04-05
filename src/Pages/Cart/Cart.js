import React from 'react';
import { useContext } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductsProvider';

const Cart = () => {

    const heading = [
        {
            id: 1,
            title: "Products",
            span: 3,
        },
        {
            id: 2,
            title: "Quantity",
            span: 2,
        },
    ]

    const { cartProducts } = useContext(ProductContext);

    return (
        <div className=''>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal justify-end">
                <div className="modal-box h-screen w-96 mr-5 relative">
                    <div>
                        <label htmlFor="cart-modal" className="btn btn-sm btn-error text-white btn-circle absolute right-2 top-2">✕</label>
                        <h1 className='font-semibold text-3xl text-center'>Shopping Cart</h1>
                        <hr className='mt-2 h-1 bg-emerald-400'></hr>
                    </div>
                    {
                        cartProducts.length ?
                            <div>
                                <div className="mt-3 grid grid-cols-5 text-center">
                                    {
                                        heading.map(h =>
                                            <h4 key={h.id} className={`text-lg font-semibold col-span-${h.span} mb-5`}>{h.title}</h4>
                                        )
                                    }
                                    {
                                        cartProducts.map(cp =>
                                            <>
                                                <div className='col-span-3 my-2'>
                                                    <p className='text-left'>{cp.name}</p>
                                                </div>
                                                <div className='col-span-2 flex items-center justify-evenly'>
                                                    <span className='text-xl text-red-300 hover:text-red-600 hover:cursor-pointer'><AiOutlineMinusCircle /></span>
                                                    <p>{cp.price}</p>
                                                    <span className='text-xl
                                            text-emerald-300  hover:text-emerald-500 hover:cursor-pointer'><AiOutlinePlusCircle /></span>

                                                </div>
                                            </>
                                        )
                                    }

                                </div>
                                <Link to='/checkout'><label htmlFor="cart-modal" className="btn  hover:bg-success w-full modal-action justify-center">Review Cart</label></Link>
                            </div>
                            : <p className='text-xl text-orange-500 text-center  mt-16'>No items found!! <br /> Add items to review.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;
import React from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

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

    const cartProducts = [
        {
            id: 1,
            name: "Apple",
            quantity: 12,
        },
        {
            id: 2,
            name: "Spinach",
            quantity: 12,
        },
        {
            id: 3,
            name: "Jack Fruit",
            quantity: 12,
        },
        {
            id: 4,
            name: "Capcicum",
            quantity: 12,
        },
        {
            id: 5,
            name: "Cauliflower",
            quantity: 12,
        },
    ]
    return (
        <div className='relative'>
            <input type="checkbox" id="cart-modal" className="modal-toggle" />
            <div className="modal justify-end">
                <div className="modal-box h-screen w-96 mr-5">
                    <div>
                        <label htmlFor="cart-modal" className="btn btn-sm btn-error text-white btn-circle absolute right-2 top-2">✕</label>
                        <h1 className='font-semibold text-3xl text-center'>Shopping Cart</h1>
                        <hr className='mt-2 h-1 bg-emerald-400'></hr>
                    </div>
                    <div className="mt-3 grid grid-cols-5 text-center">
                        {
                            heading.map(h =>
                                <h4 key={h.id} className={`text-lg font-semibold col-span-${h.span} mb-5`}>{h.title}</h4>
                            )
                        }
                        {
                            cartProducts.map(cp =>
                                <>
                                    <div key={cp.id} className='col-span-3 my-2'>
                                        <p className='text-left'>{cp.name}</p>
                                    </div>
                                    <div className='col-span-2 flex items-center justify-evenly'>
                                        <span className='text-xl text-red-300 hover:text-red-600 hover:cursor-pointer'><AiOutlineMinusCircle/></span>
                                        <p>600</p>
                                        <span className='text-xl
                                        text-emerald-300  hover:text-emerald-500 hover:cursor-pointer'><AiOutlinePlusCircle/></span>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <div className="absolute bottom-2 w-11/12 left-0 right-0 mx-auto">
                        <label htmlFor="cart-modal" className="btn w-full">Checkout</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
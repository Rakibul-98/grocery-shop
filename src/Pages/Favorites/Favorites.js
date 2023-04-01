import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsProvider';

const Favorites = () => {

    const { savedProducts} = useContext(ProductContext);

    const heading = [
        {
            id: 1,
            title: "Products",
            span: 3,
        },
        {
            id: 2,
            title: "Price",
            span: 2,
        },
    ]

    return (
        <div className='relative'>
            <input type="checkbox" id="favorites-modal" className="modal-toggle" />
            <div className="modal justify-end">
                <div className="modal-box h-screen w-96 mr-5">
                    <div>
                        <label htmlFor="favorites-modal" className="btn btn-sm btn-error text-white btn-circle absolute right-2 top-2">✕</label>
                        <h1 className='font-semibold text-3xl text-center'>Favorite Items</h1>
                        <hr className='mt-2 h-1 bg-emerald-400'></hr>
                    </div>
                    <div className="mt-3 grid grid-cols-5 text-center">
                        {
                            heading.map(h =>
                                <h4 key={h.id} className={`text-lg font-semibold col-span-${h.span} mb-5`}>{h.title}</h4>
                            )
                        }
                        {
                            savedProducts.map(fp =>
                                <>
                                    <div className='col-span-3 my-2'>
                                        <p className='text-left'>{fp.name}</p>
                                    </div>
                                    <div className='col-span-2'>
                                        <p>${fp.price}</p>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Favorites;
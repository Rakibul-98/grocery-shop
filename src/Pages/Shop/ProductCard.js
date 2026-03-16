import React, { useContext, useState } from 'react';
import { ProductContext } from '../../contexts/ProductsProvider';
import { BsBagDash } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const ProductCard = ({ product }) => {
    const { addToFav, addToCart } = useContext(ProductContext);
    const { img, name, price } = product;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const iconStyle = "mx-2 p-3 bg-white rounded-full hover:bg-orange-500 hover:text-white";

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <div className='relative group hover:shadow-xl rounded-lg'>
                <img
                    onClick={openModal}
                    className='rounded-t-lg cursor-pointer'
                    src={img}
                    alt={name}
                />
                <div className='text-2xl group-hover:flex justify-center hidden -mt-12'>
                    <span onClick={() => addToFav(product)} className={iconStyle}><AiOutlineHeart /></span>
                    <span onClick={() => addToCart(product)} className={iconStyle}><BsBagDash /></span>
                </div>
                <div className='text-center font-bold mt-2 pb-3'>
                    <p className='text-xl'>{name}</p>
                    <p>${price}.00</p>
                </div>
            </div>

            {/* Simple Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl max-h-[90vh]">
                        <button
                            onClick={closeModal}
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 text-3xl"
                        >
                            <IoClose />
                        </button>
                        <img
                            src={img}
                            alt={name}
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductCard;
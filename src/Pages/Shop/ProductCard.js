import React, { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductsProvider';
import { BsBagDash } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({product}) => {
    const { handleAdd } = useContext(ProductContext);
    const {img, name,id,price} = product;

    const iconStyle = "mx-2 p-3 bg-white rounded-full hover:bg-orange-500 hover:text-white";

    return (
        <div className='relative group hover:shadow-xl rounded-lg'>
            <img className='rounded-t-lg' src={img} alt={name} />
            <div className='text-2xl group-hover:flex justify-center hidden -mt-12'>
                <span onClick={() => handleAdd(id, "fav")} className={iconStyle}><AiOutlineHeart /></span>
                <span onClick={() => handleAdd(id, "cart")} className={iconStyle}><BsBagDash /></span>
            </div>
            <div className='text-center font-bold mt-2 pb-3'>
                <p className='text-xl'>{name}</p>
                <p>${price}.00</p>
            </div>
        </div>
    );
};

export default ProductCard;
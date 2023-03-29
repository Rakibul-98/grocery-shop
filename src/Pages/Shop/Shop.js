import React, { useContext, useEffect, useState } from 'react';
import { BsBagDash } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import Cart from '../../Pages/Cart/Cart';
import { ProductContext } from '../../contexts/ProductsProvider';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const {savedProducts, setSavedProducts, cartProducts, setCartProducts} = useContext(ProductContext)

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const nav = [
        {
            id: 1,
            name: "All",
            link: "#",
        },
        {
            id: 2,
            name: "Meat",
            link: "#",
        },
        {
            id: 3,
            name: "Vegetable",
            link: "#",
        },
        {
            id: 4,
            name: "Fruits",
            link: "#",
        },
        {
            id: 5,
            name: "Sea Food",
            link: "#",
        },
        {
            id: 6,
            name: "Herbs",
            link: "#",
        },
        {
            id: 7,
            name: "Ice-cream",
            link: "#",
        }
    ]

    const handleAddToSave = (p_id) => {
        products.forEach(product => {
            if (product.id === p_id) {
                const newProducts = [...savedProducts, product];
                setSavedProducts(newProducts);
            }
        });
    }

    const handleAddToCart = (p_id) => {
        products.forEach(product => {
            if (product.id === p_id) {
                const newProducts = [...cartProducts, product];
                setCartProducts(newProducts);
            }
        });
    }

    const iconStyle = "mx-2 p-3 bg-white rounded-full hover:bg-orange-500 hover:text-white";

    return (
        <div className='my-10'>
            <Cart />
            <div className='group'>
                <h1 className='text-center text-4xl font-semibold'>Products</h1>
                <hr className='w-2/12 md:w-1/12 mx-auto h-1 bg-emerald-500 md:group-hover:w-2/12 group-hover:w-5/12 transition-width duration-500 ease-in-out mt-2'></hr>
            </div>
            <nav className='text-center my-10'>
                {
                    nav.map(n =>
                        <a key={n.id} className='mx-5 font-semibold text-emerald-500 hover:text-black' href={n.link}>{n.name}</a>
                    )
                }
            </nav>
            <div className='grid w-11/12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 mx-auto'>
                {
                    products.map(p =>
                        <div key={p.id} className='relative group hover:shadow-xl rounded-lg'>
                            <img className='rounded-t-lg' src={p.img} alt={p.title} />
                            <div className='text-2xl group-hover:flex justify-center hidden -mt-12'>
                                <span onClick={() => handleAddToSave(p.id)} className={iconStyle}><AiOutlineHeart /></span>
                                <span onClick={()=>handleAddToCart(p.id)} className={iconStyle}><BsBagDash /></span>
                            </div>
                            <div className='text-center font-bold mt-2 pb-3'>
                                <p className='text-xl'>{p.title}</p>
                                <p>${p.price}.00</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;
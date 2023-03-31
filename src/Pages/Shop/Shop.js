import React, { useContext } from 'react';
import Cart from '../../Pages/Cart/Cart';
import { ProductContext } from '../../contexts/ProductsProvider';
import ProductCard from './ProductCard';

const Shop = () => {
    
    const { products} = useContext(ProductContext);

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
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>
                    )
                }
            </div>
        </div>
    );
};

export default Shop;
import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { BsBagDash, BsFillHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../contexts/ProductsProvider';

const NavBar = () => {

    const {cartProducts, savedProducts} = useContext(ProductContext);

    const nav = [
        {
            id: 5,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Shop",
            link: "/shop",
        },
        {
            id: 3,
            name: "Blog",
            link: "/blog",
        },
        {
            id: 1,
            name: "About",
            link: "/about",
        },
        {
            id: 4,
            name: "Login",
            link: "/login",
        }
    ]

    return (
        <Navbar className='bg-opacity-0 pt-5' fluid={true} rounded={true}>
            <Navbar.Brand href="/">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="FlowBite Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> LOGO </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <div className='flex text-2xl '>
                    <div className="indicator">
                        <span className="indicator-item bg-fuchsia-500 border-0 badge p-1 badge-secondary text-xs font-bold">{savedProducts.length}</span>
                        <label htmlFor="favorites-modal" className='hover:text-emerald-400 cursor-pointer'><BsFillHeartFill /></label>
                    </div>
                    <div className="indicator mx-5">
                        <span className="indicator-item bg-yellow-300 border-0 badge p-1 badge-secondary text-xs font-bold">{cartProducts.length}</span>
                        <label htmlFor="cart-modal" className='hover:text-emerald-400 cursor-pointer'><BsBagDash /></label>
                    </div>
                </div>
                <p>Total: <span className='font-bold'>$150.00</span></p>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {
                    nav.map(n => <Link className='text-lg hover:text-emerald-500 font-semibold border-gray-100 hover:bg-gray-100 border-b md:border-b-0 p-2 md:p-0 md:hover:bg-transparent' key={n.id} to={n.link}>{n.name}</Link>)
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
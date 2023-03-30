import { Navbar } from 'flowbite-react';
import React from 'react';
import { BsBagDash, BsFillHeartFill} from "react-icons/bs";
import { Link } from 'react-router-dom';

const NavBar = () => {

    const nav =[
        {
            id:5,
            name:"Home",
            link:"/",
        },
        {
            id:2,
            name:"Shop",
            link:"/shop",
        },
        {
            id:3,
            name:"Blog",
            link:"/blog",
        },
        {
            id:1,
            name:"About",
            link:"/about",
        },
        {
            id:4,
            name:"Login",
            link:"/login",
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
                    <label htmlFor="favorites-modal" className='hover:text-emerald-400 cursor-pointer'><BsFillHeartFill/></label>
                    <label htmlFor="cart-modal" className='mx-5 hover:text-emerald-400 cursor-pointer'><BsBagDash/></label>
                </div>
                <p>Total: <span className='font-bold'>$150.00</span></p>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {
                    nav.map(n=><Link className='text-lg hover:text-emerald-500 font-semibold border-gray-100 hover:bg-gray-100 border-b md:border-b-0 p-2 md:p-0 md:hover:bg-transparent' key={n.id} to={n.link}>{n.name}</Link>)
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
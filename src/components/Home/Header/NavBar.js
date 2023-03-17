import { Navbar } from 'flowbite-react';
import React from 'react';
import { BsBagDash, BsFillHeartFill} from "react-icons/bs";

const NavBar = () => {

    const nav =[
        {
            id:1,
            name:"About",
            link:"#about",
        },
        {
            id:2,
            name:"Shop",
            link:"#shop",
        },
        {
            id:3,
            name:"Blog",
            link:"#blog",
        },
        {
            id:4,
            name:"Contact",
            link:"#contact",
        }
    ]

    return (
        <Navbar className='bg-opacity-0 pt-5' fluid={true} rounded={true}>
            <Navbar.Brand href="/">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> LOGO </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <div className='flex text-2xl '>
                    <span className='hover:text-emerald-400'><BsFillHeartFill/></span>
                    <span className='mx-5 hover:text-emerald-400'><BsBagDash/></span>
                </div>
                <p>Total: <span className='font-bold'>$150.00</span></p>
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link className='text-lg' href="/">Home</Navbar.Link>
                {
                    nav.map(n=><Navbar.Link className='text-lg' key={n.id} href={n.link}>{n.name}</Navbar.Link>)
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
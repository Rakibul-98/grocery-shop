import React from 'react';
import Banner from './Banner';
import Menu from './Menu';
import NavBar from './NavBar';

const Header = () => {
    return (
        <div>
            <NavBar/>
            <div className='grid md:grid-cols-8 w-11/12 md:w-9/12 mx-auto mt-5 gap-5'>
                <div className='md:col-span-2'>
                    <Menu/>
                </div>
                <div className='md:col-span-6'>
                    <Banner/>
                </div>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import Logo from './logo';
import SearchBar from './search-bar';
import { Lightning, Bell, Avatar } from '../icons';

const Navbar = () => {
    return (
        <nav className='h-fit flex justify-between sm:p-0 p-4'>
            <Logo />
            <div className='flex justify-between md:w-5/12 w-8/12'>
                <SearchBar />
                <div className='flex md:justify-between justify-evenly md:w-3/12 w-full'>
                    <Lightning className="mt-2"/>
                    <Bell className="mt-2"/>
                    <Avatar />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;

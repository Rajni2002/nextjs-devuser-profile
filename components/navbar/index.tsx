"use client"
import React from 'react';
import Logo from './logo';
import SearchBar from './search-bar';
import { Lightning, Bell } from '../icons';
import Avatar from '../ui/avatar';
import { useGlobalContext } from '@/context/app';

const Navbar = () => {
    const [appState] = useGlobalContext();
    return (
        <nav className='h-fit flex justify-between sm:p-0 p-4'>
            <Logo />
            <div className='flex justify-between md:w-5/12 w-8/12'>
                <SearchBar />
                <div className='flex md:justify-between justify-evenly md:w-3/12 w-full'>
                    <Lightning className="mt-2" />
                    <Bell className="mt-2" />
                    <Avatar className='w-10 h-10' showBadge src={appState.profile.profilePic.length !== 0 ? appState.profile.profilePic : ""} />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;

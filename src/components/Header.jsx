import React from 'react';
import logo from "../assets/more/logo1.png"

const Header = () => {
    return (
        <div className='bg-[#3a2a2a] flex justify-center items-center py-2'>
            <img className='w-[75px] h-[90px]' src={logo} alt="" />
            <h2 className='text-white text-6xl'>Espresso Emporium</h2>
        </div>
    );
};

export default Header;
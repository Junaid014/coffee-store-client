import React from 'react';
import { Link } from 'react-router';

const ProductList = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mt-20'>Our Popular Products</h1>
            <Link to="addCoffee" className='btn flex w-[90px] mx-auto bg-[#E3B577] border border-[#331A15] px-4 py-1 rounded-sm mt-2 text-center '>Add Coffee</Link>
            
        </div>
    );
};

export default ProductList;
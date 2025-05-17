import React, { useState } from 'react';
import Banner from './Banner';
import ProductList from './ProductList';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const loadedCoffees=useLoaderData();
    const [coffees,setCoffees]=useState(loadedCoffees);
    const handleDeleteFromParent=(deletedId)=>{
        const remaining=coffees.filter(coffee=>coffee._id !==deletedId);
        setCoffees(remaining)
    }
 
    return (
        <div>
            <Banner/>
            <ProductList/>
            <div className="grid grid-cols-2 w-7xl mx-auto gap-8 mt-10 ">
                {
                    coffees.map(initialCoffee=><CoffeeCard
                    key={initialCoffee._id}
                    initialCoffee={initialCoffee}
                    onDelete={handleDeleteFromParent}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Cards from "../comps/Cards"

const Products = () => {
    return (
        <div className='flex pt-20 flex-col'>
            <h1 className='w-full text-center py-10 text-5xl'>Nuestros productos</h1>
            <Cards/>
        </div>
    );
}

export default Products;

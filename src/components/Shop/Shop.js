import React from 'react';
import Cars from '../Cars/Cars';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop'>
            <Cars></Cars>
            <Cart></Cart>
        </div>
    );
};

export default Shop;
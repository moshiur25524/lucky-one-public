import React from 'react';
import './Cart.css'

const Cart = ({item}) => {
    
    // const {cart}=props;
    return (
        <div className='cart'>
            <h2>Selected cars</h2>
            <p>{item.length}</p>
            <p>Name:{}</p>
        </div>
    );
};

export default Cart;
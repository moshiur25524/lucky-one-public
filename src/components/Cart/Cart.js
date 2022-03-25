import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name}=props;
    return (
        <div className='cart'>
            <h2>Selected cars</h2>
            <p>{name}</p>
        </div>
    );
};

export default Cart;
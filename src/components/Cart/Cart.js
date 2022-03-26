import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({item}) => {
    
    // const {cart}=props;
    return (
        <div className='cart'>
            <p>{item.length}</p>
            <p>Name: {item.name}<FontAwesomeIcon icon= {faDeleteLeft}></FontAwesomeIcon></p>
        </div>
    );
};

export default Cart;
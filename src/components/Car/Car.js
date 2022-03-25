import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Car.css'

const Car = (props) => {
    const {name,img,price}=props.car
    const {handleAddToCart}=props;
    return (
        <div className='car'>
            <h2>Name:{name}</h2>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={handleAddToCart}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Car;
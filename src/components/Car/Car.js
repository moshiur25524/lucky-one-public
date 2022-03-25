import React from 'react';
import './Car.css'

const Car = (props) => {
    const {name,img,price}=props.car
    return (
        <div className='car'>
            <h2>Name:{name}</h2>
            <img src={img} alt="" />
            <p>Price:{price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Car;
import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Cars.css'

const Cars = () => {
    const [cars,setCars]= useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    
    const handleAddToCart=(car)=>{
        const newCart = [...cart, car];
        setCart(newCart);
    }
    return (
        <div>
           <h1>Choose 4 cars for lovely trip</h1>
            <div className='car-container'>
            <div className='cars'>
            {
                cars.map(car=><Car
                key={car.id}
                car={car}
                handleAddToCart={handleAddToCart}
                ></Car>)
            }
            </div>
            <div>
            {
                cart.map(item=><Cart
                    item ={item}
                    ></Cart>)
            }
            </div>
            </div>
        </div>
    );
};

export default Cars;
import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Cars.css'

const Cars = () => {
    const [cars,setCars]= useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    const handleAddToCart=()=>{
        console.log('It will be worked');
    }
    return (
        <div>
           <h1>Choose 4 cars for lovely trip</h1>
            <div className='cars'>
            {
                cars.map(car=><Car
                key={car.id}
                car={car}
                handleAddToCart={handleAddToCart}
                ></Car>)
            }
            </div>
        </div>
    );
};

export default Cars;
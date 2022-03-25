import React from 'react';

const Cars = () => {
    const cars = [
        {id:1, name:'antique', price:89000,img:'https://cdn.pixabay.com/photo/2018/01/18/20/56/auto-3091234_960_720.jpg' },
        {id:2, name:'auto_motive', price:89000,img:'https://cdn.pixabay.com/photo/2021/03/07/23/51/car-6077773_960_720.jpg' },
        {id:3, name:'bmw', price:89000,img:'https://cdn.pixabay.com/photo/2020/10/18/16/40/bmw-5665352_960_720.jpg' },
        {id:4, name:'caymon', price:89000,img:'https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg' },
        {id:5, name:'classic', price:89000,img:'https://cdn.pixabay.com/photo/2020/09/06/07/37/car-5548242_960_720.jpg' },
        {id:6, name:'ferrari', price:89000,img:'https://cdn.pixabay.com/photo/2018/04/07/16/30/auto-3298890_960_720.jpg' },
        {id:7, name:'marcedes', price:89000,img:'https://cdn.pixabay.com/photo/2016/09/06/13/37/maserati-gran-turismo-1649119_960_720.jpg' },
        {id:8, name:'maserati', price:89000,img:'https://cdn.pixabay.com/photo/2016/11/23/17/25/woman-1853939_960_720.jpg' },
        {id:9, name:'porshe', price:89000,img:'https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_960_720.jpg' },
        {id:10, name:'sports_car', price:89000,img:'https://cdn.pixabay.com/photo/2016/09/11/16/47/car-1661767_960_720.jpg' }
    ]
    return (
        <div>
            <h1>here will be all cars</h1>
            {
                cars.map(car=>console.log(car))
            }
        </div>
    );
};

export default Cars;
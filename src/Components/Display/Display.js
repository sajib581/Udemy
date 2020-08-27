import React, { useState } from 'react';
import data from '../../Fake Data/data'
import Element from './Elements/Element';
import './display.css'
import Cart from './Cart/Cart';

const Display = () => {
    const [cart, setCart] = useState([]);  
    const cartHandeler = (item) => {
        const newElement = [...cart, item]
        setCart(newElement)        
    }  
    const cancelHandeller = (data) =>{
        const id = data.id ;
        console.log(id);
    }
    return (
        <div className="display">
            <div className="items row">
                    {
                        data.map((data)=><Element key={data.id} cartHandeler={cartHandeler} data={data}></Element>)
                    }
                </div>
            <div className="showCart">
                <Cart cancelHandeller={cancelHandeller} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Display;
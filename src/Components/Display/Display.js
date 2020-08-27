import React from 'react';
import data from '../../Fake Data/data'
import Element from './Elements/Element';
import './display.css'
import Cart from './Cart/Cart';

const Display = () => {
    return (
        <div className="display">
            <div className="items row">
                    {
                        data.map((data)=><Element key={data.id} data={data}></Element>)
                    }
                </div>
            <div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Display;
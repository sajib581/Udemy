import React from 'react';
import './showcart.css'

const Showcart = (props) => {
    const cart = props.carts
    
    let title = cart.title
    let newTitle =title.slice(0,22) + "..." ;    
    
    console.log(props);
    return (
        <div className="carts">
            <img src={cart.image} alt=""/>
            <div>
                <p><small><strong><span>{newTitle}</span></strong></small></p>
                <p><small><strong><span>Price : {cart.price} $</span></strong></small> <small><strong><span onClick={()=>props.cancelHandeller(cart)} className="cancel">Cancel</span></strong></small></p>
            </div>

        </div>
    );
};

export default Showcart;
import React from 'react';
import './Element.css';

const Element = (props) => {
    const {title,quality,price,image,details,trainer} = props.data
    return (
        <div className="element">
            <div>
                <img src={image} alt=""/>
            </div>
            <div>
                <h6>{title}</h6>
                <p id="trainer"><small>{trainer}</small></p>
                <h5>${price}</h5>
                <p><small><strong><span className="bestseller">{quality}</span></strong></small></p>
                <button className="btn btn-primary">Enroll Now</button>
            </div>
        </div>
    );
};

export default Element;
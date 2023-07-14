import './App.css';
import { useState } from 'react';

function Card (props) {
    console.log(props);
            return(
                <div className='col-md-4' key={props.shoes.idx}>
                    <img src={props.shoes.imgURL} width="80%"/>
                    <h4>{props.shoes.title}</h4>
                    <p>{props.shoes.price}</p>
                </div>
            );
};

export default Card;
import './PaintingDetails.css'
import React from 'react';
import {useParams} from 'react-router-dom';
import {useCart} from '../Cart/CartContext.js'
import Paintings from '../Paintings/Paintings.js';

function PaintingDetails () {

    const { addToCart} = useCart();  //this is a call to useCart() from CartContext.js. allows access to the cart

    const {id} = useParams(); //gets the id from the url
    const painting = Paintings.find(p => p.id === parseInt(id));

    if (!painting) {
        return <p>this painting cannot be found</p>
    };

    

    return (
        <div className='detailsPage'>
            <h2>{painting.title}</h2>
            <img src={painting.img} alt={painting.title} />
            <p>{painting.description}</p>
            <p>{painting.price} €</p>
            <button onClick={() => addToCart(painting)}>Add to cart</button>
        </div>
    )
};

export default PaintingDetails;
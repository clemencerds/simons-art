import PaintingsDetails from './PaintingDetails.css'
import React from 'react';
import {useParams} from 'react-router-dom';
import Paintings from '../Paintings/Paintings.js';

function PaintingDetails () {

    const {id} = useParams();
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
            <button>Ajouter au panier</button>
        </div>
    )
};

export default PaintingDetails;
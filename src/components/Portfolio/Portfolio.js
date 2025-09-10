import './Portfolio.css';
import React from 'react';
import {Link} from 'react-router-dom'
import paintings from '../Paintings/Paintings.js'


function Portfolio () {

    return(
        <div>
            <div className='display'>
                {paintings.map((painting) => (
                    <div 
                        className='painting'
                        key= {painting.id}>
                        <Link to={`/painting/${painting.id}`}>
                            <img 
                                src={painting.img}
                                alt={painting.title}
                            />
                            <h3>{painting.title}</h3>
                        </Link>
                        <p>{painting.price} €</p>
                    </div>
                ))};
            </div>
            <div>
        
            </div>
        </div>
    )
}

export default Portfolio;
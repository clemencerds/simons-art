import './Cart.css'
import React from 'react';
import {useCart} from '../Cart/CartContext.js'

function Cart () {
    const {cart, removeFromCart} = useCart() //access to the cart;
    return (
        <div className='cart'>
            {cart.map(item => (
                <div key={item.id}>
                    {item.title} {item.quantity} {item.price} €
                    <button id='delete' onClick={() => removeFromCart(item.id)}>x</button>
                </div>
            ))}
            <p>Total: {cart.reduce((acc, item) => acc + item.price, 0)} €</p>
            <button id='checkout'>Checkout</button>
        </div>
    )
}

export default Cart;
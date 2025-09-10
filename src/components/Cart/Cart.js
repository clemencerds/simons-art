import './Cart.css'
import React from 'react';
import {useCart} from '../Cart/CartContext.js'

function Cart () {
    const {cart, removeFromCart} = useCart() //access to the cart;
    return (
        <div className='cart'>
            <h2>shopping cart</h2>
            <div className='carttitles'>
            <h3>item</h3>
            <h3>quantity</h3>
            <h3>price</h3>
            <h3></h3>
            </div>
            {cart.map(item => (
                <div key={item.id} className='cartlist'>
                    <div>{item.title}</div> 
                    <div>{item.quantity}</div> 
                    <div  id='quantity'>{item.price} €</div>
                    <button id='delete' onClick={() => removeFromCart(item.id)}>x</button>
                </div>
            ))}
            <div className='carttotal'>
            <p>Total:</p> 
            <p> {cart.reduce((acc, item) => acc + item.price, 0)} €</p>
            </div>
            <button id='checkout'>Checkout</button>
        </div>
    )
}

export default Cart;
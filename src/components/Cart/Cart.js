import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div>
            <h2 className='fix-cart-titel'>Order Summary</h2>
            <div className='fix-cart-item'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: </p>
                <p>Total Shipping Charge:</p>
                <p>Tax:</p>
                <p>Grand Total:</p>
                <div className='cart-button'>
                    <button className='clear-btn'>Clear Cart</button>

                    <button className='review-btn'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
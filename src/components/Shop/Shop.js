import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        console.log(newCart);
        setCart(newCart);
    }
    return (
        <div className='shoping-cart'>
            <div className='shop-part'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-components'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
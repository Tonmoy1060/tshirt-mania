import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useProducts();

    const [cartProducts, setCartProducts] = useState([]);
    const addToCart = (item) => {
        const exist = cartProducts.find(cartProduct => cartProduct.id === item.id)
        if (!exist) {
            const newCart = [...cartProducts, item];
            setCartProducts(newCart);
        }
        else{
            alert('Arde')
        }
    }
    const removeCart = (item) => {
        const rest = cartProducts.filter(cartProduct => cartProduct.id !== item.id)
        setCartProducts(rest);
    }
    return (
        <div className='homepage'>
            <div className='product-details'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-details'>
                <h1>This is cart</h1>
                {
                    cartProducts.map(cartProduct => <Cart
                        cartProduct={cartProduct}
                        key={cartProduct.id}
                        removeCart={removeCart}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Home;
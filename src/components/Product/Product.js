import React from 'react';
import './Product.css';

const Product = (props) => {

    const {addToCart, product} = props
    const { name, id, img, review, price, ratings } = product;
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='information'>
                <h1>{name}</h1>
                <p><small>{review}</small></p>
                <p><small>Ratings: {ratings}</small></p>
                <h4>Price: {price} Taka</h4>
            </div>
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;
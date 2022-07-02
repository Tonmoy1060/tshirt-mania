import React from 'react';

const Cart = (props) => {
    const {cartProduct, removeCart} = props;
    return (
        <div>
            <p>{cartProduct.name}
            <button onClick={() => removeCart(cartProduct)}> Remove </button>
            </p>
        </div>
    );
};

export default Cart;
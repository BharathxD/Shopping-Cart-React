import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const { products } = props;
  return (
    <div>
    <div className='header-container'>
    <h1 className="header">My Cart</h1>
    </div>
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        )
      })}
    </div>
    </div>
  );
}

export default Cart;
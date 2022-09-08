import React from 'react';

const CartItem = (props) => {
    const { price, title, qty, img } = props.product;
    const { product, 
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct
      } = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img className="cart-item-image" src={img} alt=""/>
        </div>
        <div className="right-block">
          <div>{title}</div>
          <div>{price}$ </div>
          <div>Qty: {qty} </div>
          <div className="cart-item-actions">
            <i className="fa-solid fa-circle-plus icon add" onClick={() => onIncreaseQuantity(props.product)}></i>
            <i className="fa-solid fa-circle-minus icon remove" onClick={() => onDecreaseQuantity(props.product)}></i>
            <i className="fa-solid fa-trash icon delete" onClick={() => onDeleteProduct(product.id)}></i>
          </div>
        </div>
      </div>
    );
}

export default CartItem;
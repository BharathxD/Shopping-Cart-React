import React from 'react';

const Navbar = (props) => {
  return (
    <div className='nav'>
      <div className='cartIconContainer'>
      <i className="fa-solid fa-cart-shopping cartIcon"></i>
        <span className='cartCount'> {props.count} </span>
      </div>
    </div>
  );
}


export default Navbar;
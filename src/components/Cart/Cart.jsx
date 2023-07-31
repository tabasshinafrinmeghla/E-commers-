/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const Cart = ({ cart,handleClearCart, children  }) => {
  // const {cart} = props;
  console.log = (cart);

  let total = 0;
  let totalShopping = 0;
  let quantity = 0;

  for (const product of cart) {

    // reload er problem er jonno-----

    // if(product.quantity === 0){
    //   product.quantity=1;
    // }
    product.quantity = product.quantity || 1;
    // -------------------------------------


    total = total + product.price;
    totalShopping = totalShopping + product.shipping;
    quantity = quantity + product.quantity;
  }

  // let shipping =0;
  // for (const product of cart){
  //   totalShopping = shipping + product.shipping
  // }


  // for (const quantity of cart){
  //   quantity = quantity + product.quantity;
  // }

  const tax = total * 7 / 100;

  const grand = total + totalShopping + tax;

  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      <p>Select Items: <span className='text-color'> {quantity} </span></p>
      <p>Total Price: <span className='text-color'> {total} </span></p>
      <p>Total Shipping: <span className='text-color'> {totalShopping} </span></p>
      <p>tax:<span className='text-color'>  {tax.toFixed(2)} </span></p>
      <h4>Grand Total: <span className='text-color'> {grand.toFixed(2)} </span></h4>

      <button onClick={handleClearCart}  className='btn-clear-cart'><span className='clear-cart'>Clear Cart</span>
        <FontAwesomeIcon className='icon-clear' icon={faTrashAlt}/>
      </button>
      {children}






      {/* <button className='btn-review-cart'><span className='review-cart'>Review Order </span>
        <FontAwesomeIcon className='icon-review' icon={faArrowCircleRight}/>
      </button> */}
    </div>
  );
};

export default Cart;
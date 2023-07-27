/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Order.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Product from '../product/Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../../ema-john-resources-main/utilities/fakedb';

const Order = () => {

  const savedCart=useLoaderData();
  const [cart,setCart ]= useState(savedCart)
  // console.log(savedCart)

const handleRemoveFromCart = (id) =>{
   const remaining = cart.filter(product => product.id !==id);
   setCart(remaining);
   removeFromDb(id);
}





  return (
    <div className='shop-container'>
      <div className='review'>
        {/* <h2>Order pages:{cart.length} </h2> */}
        {
          cart.map(product => <ReviewItem
          key={product.id}
          product={product}
          handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem> )
        }
      </div>
      <div className='card_container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
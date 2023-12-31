/* eslint-disable no-undef */
// import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../../product/Product/Product';
import Cart from '../../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart, } from '../../../../ema-john-resources-main/utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  useEffect(() => {

    const storedCart = getShoppingCart;
    // console.log(storedCart);
    

    for (const id in storedCart) {
      const saveProduct = products.find(product => product.id === id)
      console.log(saveProduct);

      const quantity = storedCart[id];
      addedProduct.quantity = quantity
      console.log(addedProduct);

    }

  }, [products])

  //  console.log(products)
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id)
      if (addedProduct) {
        // -----add quantity---------
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
      //  console.log('added Product',addedProduct);
    }
    setCart(savedCart);
  }, [products])

  const handleAddToCart = (product) => {
    cart.push(product);
    // {amra ager a cart a add korte parbo na }
    let newCart = [];
    //  {alada alada cart er jonno}

    newCart = [...cart, product];
    const exists = cart.find(pd => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...Cart, product]
    }
    else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart = [...remaining, exists]
    }


    setCart(newCart);

    addToDb(product.id)

  }

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }

  return (

    <div className='shop-container'>
      <div className="products_container">
        {/* <h3>products coming here:{products.length} </h3> */}
        {
          products.map(product => <Product key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <div className="card_container">
        <Cart 
        cart={cart}
        handleClearCart ={handleClearCart}
        >
          <Link to= "/orderReview">
            <button className='button-proceed'>Review 
            <FontAwesomeIcon className='right-icon' icon={faArrowCircleRight} />
            </button>
          </Link>
        </Cart>

      </div>
    </div>
  );
};

export default Shop;

//  icon={faArrowCircleRight}
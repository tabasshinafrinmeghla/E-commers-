/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Manage = () => {
  const products =useLoaderData() ;
  console.log(products);
  return (
    <>
      <div >
      <h1>hello:{products.length}</h1>
      </div>
      <div>
        <h1>hi</h1>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Manage;
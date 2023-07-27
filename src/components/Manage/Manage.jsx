/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Manage = () => {
  const products =useLoaderData() ;
  console.log(products);
  return (
    <div>
      <div >
      <h1>hello:{products.length}</h1>
      </div>
      <div>
        <h1>hi</h1>
      </div>
    </div>
  );
};

export default Manage;
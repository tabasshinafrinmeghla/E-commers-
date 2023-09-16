/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css';
import Header from '../Component/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Home;
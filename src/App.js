import './App.css';
import React from 'react';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/Root/Root.js';
import About from './components/About/About.js';
import Portfolio from './components/Portfolio/Portfolio.js';
import Cart from './components/Cart/Cart.js';
import PaintingDetails from './components/PaintingDetails/PaintingDetails.js'



function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='/about' element={<About/>} />
      <Route index element={<Portfolio/>} />
      <Route path='portfolio' element={<Portfolio/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/painting/:id' element={<PaintingDetails/>} />
    </Route>
  ));


  return (
    <RouterProvider router ={ router } />
  );
};

export default App;

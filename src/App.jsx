import React, { useState } from 'react';
import { Routes, Route} from "react-router-dom"
import Header from "./comps/Header"
import Home from "./pages/Home"
import Footer from "./comps/Footer"
import Products from './pages/Products';
import Cart from './comps/Cart';
import Form from "./comps/Form"

const App = () => {
  const [cart, setCart] = useState(false);

    function closeCart(){
        setCart(false);
    }
    function openCart(){
        setCart(true);
    }
  return (
    <>
    <Header cart={openCart}/>
    {cart && <Cart close={closeCart}/>}
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/order" element={<Form/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

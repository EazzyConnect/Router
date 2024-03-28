import React from 'react';
import Router from "./components/Router";
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Contact from './components/Pages/Contact/Contact';
import Error404 from './components/Pages/Error/Error404';



const App = () => {
  return (
    <>
      <BrowserRouter>

      <Router/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>

      <Footer/>
      
      </BrowserRouter>
    </>
  )
};

export default App;

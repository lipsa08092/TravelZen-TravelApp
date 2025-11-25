import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar"
import Footer from './Components/Common/Footer';

import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Destination from "./Pages/Destination";
import Login from './Pages/LogIn';



function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/gallery'element={<Gallery/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/login'element={<Login/>}/>
        <Route path="/destination" element={<Destination />} />
    </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App

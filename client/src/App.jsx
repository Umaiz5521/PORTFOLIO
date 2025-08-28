import React from 'react'
import {  Routes , Route } from "react-router-dom";
import Experienced from './pages/Experienced';
import Contact from './pages/Contact';
import Navbar from './component/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';



const App = () => {
  return (
  <div>
   
      <ScrollToTop /> 
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/experience' element={<Experienced/>}/>
        <Route path='/contact'   element={<Contact/>}/>
        <Route path='/about'   element={<About/>}/>
        <Route path='/skills'   element={<Skills/>}/>
        <Route path='/projects'   element={<Projects/>}/>
        


      </Routes>
      <Footer/>
    

    </div>
  )
}

export default App


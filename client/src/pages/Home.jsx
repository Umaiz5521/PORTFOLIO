import React from 'react'
import Hero from '../component/Hero'
import Skills from './Skills'
import Projects from './Projects'
import About from './About'
import Experienced from './Experienced'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
    <Hero/>
    <Skills/>
    <Projects/>
    <Experienced/>
    <About/>
    <Contact/>
    </div>
  )
}

export default Home

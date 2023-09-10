import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import About from '../components/About';
import { Fade } from "react-awesome-reveal";


const LandingPage = () => {
  return (
    <>
    <Header/>

    <Fade>
     {""}
     <Hero/>
    </Fade>
    
    <Fade>
     {""}
     <Feature/>
    </Fade>
    

    <Fade>
     {""}
     <About/>
    </Fade>
    
    <Footer/>
    </>
  )
}

export default LandingPage;
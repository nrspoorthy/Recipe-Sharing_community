import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Category from './Category/Category'
import SampleRecipe from '../SampleRecipe/SampleRecipe'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div>
      <section className="hero">
        <Navbar/>
        <Header/>
        <div className="overlay"></div>
      </section>
      
      <div data-aos="fade-up"
          data-aos-anchor-placement="center-center">
      <Category/>
    </div>
    
      <div data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <SampleRecipe/>
      </div>

      <div data-aos="fade-up"
          data-aos-offset="400"
          data-aos-anchor-placement="center-center">
      <Footer/>
    </div>
      
      
    </div>
  )
}

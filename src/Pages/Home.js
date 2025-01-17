import React from 'react'
import Footer from '../Components/Footer/Footer'
import { TopNavbar } from '../Components/Header/TopNavbar'
import { Slider } from '../Components/HomeSlider/index'
import { Product } from '../Components/Products/Product'


export const Home = () => {
  return (
    <>        
        <TopNavbar />
        <Slider />
        <Product />
        <Footer />
    </>
  )
}

import React from 'react'
import TopBar from '../../TopBar/TopBar'
import Hero from '../../Hero/Hero'
import Features from '../../Features/Features'
import FruitsShop from '../../FruitsShop/FruitsShop'
import Cards from '../../Cards/Cards'
import VegetableShop from '../../VegetableShop/VegetableShop'
import Banner from '../../Banner/Banner'
import Products from '../../Products/Products'
import ProductsCards from '../../ProductsCards/ProductsCards'
import Servicess from '../../Servicess/Servicess'
import ClientSlider from '../../ClientSlider/ClientSlider'
import Footer from '../../Footer/Footer'
import ScrollButton from '../../ScrollButton/ScrollButton'
import Layout from '../../Layout/Layout'


const Home = () => {
  return (
    <>

      <TopBar />
      <Layout>
      <Hero />
      <Features />
      <FruitsShop />
      <Cards />
      <VegetableShop />
      <Banner />
      <Products />
      <ProductsCards />
      <Servicess />
      <ClientSlider />
      <Footer />
      <ScrollButton />
      </Layout>

      
    </>
  )
}

export default Home
import React from 'react'
import Banner from '../components/Banner'
import FlashSale from '../components/FlashSale'
import BestSell from '../components/BestSell'
import ProductDetailPage from './ProductDetailPage'
import Enhance from '../components/Enhance'
import Cetagories from '../components/Cetagories'
import Explore from '../components/Explore'
import Arrival from '../components/Arrival'
import Service from '../components/Service'

const Homepage = () => {
  return (
    <>
    <Banner />
    <FlashSale />
    <Cetagories />
    <BestSell />
    <Enhance />
    <Explore />
    <Arrival />
    <Service />
    {/* <ProductDetailPage /> */}
    </>
  )
}

export default Homepage
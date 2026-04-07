import React from 'react'
import Banner from '../components/Banner'
import FlashSale from '../components/FlashSale'
import BestSell from '../components/BestSell'
import ProductDetailPage from './ProductDetailPage'
import Enhance from '../components/Enhance'
import Cetagories from '../components/Cetagories'

const Homepage = () => {
  return (
    <>
    <Banner />
    <FlashSale />
    <Cetagories />
    <BestSell />
    <Enhance />
    {/* <ProductDetailPage /> */}
    </>
  )
}

export default Homepage
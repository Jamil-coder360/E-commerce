import React from 'react'
import Banner from '../components/Banner'
import FlashSale from '../components/FlashSale'
import BestSell from '../components/BestSell'
import ProductDetailPage from './ProductDetailPage'
import Enhance from '../components/Enhance'

const Homepage = () => {
  return (
    <>
    <Banner />
    <FlashSale />
    <BestSell />
    <Enhance />
    {/* <ProductDetailPage /> */}
    </>
  )
}

export default Homepage
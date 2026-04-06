import React from 'react'
import Banner from '../components/Banner'
import FlashSale from '../components/FlashSale'
import BestSell from '../components/BestSell'
import ProductDetailPage from './ProductDetailPage'

const Homepage = () => {
  return (
    <>
    <Banner />
    <FlashSale />
    <BestSell />
    {/* <ProductDetailPage /> */}
    </>
  )
}

export default Homepage
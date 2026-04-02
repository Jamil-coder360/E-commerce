import React from 'react'
import ProductCard from './ProductCart'
import image from "../assets/product/image.png"
import Timmer from './Timmer'
const FlashSale = ({product}) => {
// products.js


const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: image,
    price: 120,
    oldPrice: 160,
    discount: 20,
    rating: 5,
    reviews: 88,
  },
  {
    id: 2,
    name: "Wireless Headphone",
    image: image,
    price: 80,
    oldPrice: 100,
    discount: 20,
    rating: 4,
    reviews: 45,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    image: image,
    price: 25,
    oldPrice: 40,
    discount: 15,
    rating: 4,
    reviews: 60,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    image: image,
    price: 150,
    oldPrice: 200,
    discount: 25,
    rating: 5,
    reviews: 120,
  },
];


  return (
   <section className='bg-white'>
			<div className="container mx-auto py-10">
                <Timmer />
				<div className="mb-10">
				</div>
				<div className="grid grid-cols-4 gap-6">
                    {
                        products.map(product => <ProductCard  key={product.id} product={product}     />)
                    }
					
				</div>
			</div>
		</section>
  )
}

export default FlashSale
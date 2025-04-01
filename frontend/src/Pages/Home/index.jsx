import React from 'react'
import Hero from './Hero'
import Products from '../../Components/Products'
import ProductDetails from '../../Components/ProductDetails'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Products/>

      <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>

      <ProductDetails />
    </div>
  )
}

import React from 'react'
import Products from "./components/Products"
import CreatProduct from './components/CreatProduct'
import Cart from './components/Cart'
export default function App() {
  return (
    <div>
      <CreatProduct></CreatProduct>
      <Products></Products>
      <Cart></Cart>
    </div>
  )
}

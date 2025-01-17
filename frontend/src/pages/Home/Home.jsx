import React from 'react'
import Products from '../../components/Products/Products'
import Shop from '../../components/Shop/Shop'
import Winter from '../../components/Winter/Winter'

const Home = () => {
  return (
    <div>
      <Winter />
      <Shop />
      <Products/>
    </div>
  )
}

export default Home
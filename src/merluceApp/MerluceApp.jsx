import React, { useState } from 'react'
import { FooterComponent, HeaderComponent, MainComponent } from '../components/ui'

export default function MerluceApp() {

  const [cartItems, setcartItems] = useState([]);

  const handleAddToCart = (product) => {
    setcartItems((prev)=> [...prev, product])
  };

  return (
    <div>
          <HeaderComponent cartItems={cartItems} />
          <MainComponent onAddToCard={handleAddToCart} />
          <FooterComponent />
    </div>
  )
}

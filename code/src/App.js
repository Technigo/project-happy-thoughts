import React from 'react'
import Header from './Components/Header/Header'
import HappyCards from './Components/HappyCards/HappyCards'
import Footer from './Components/Footer/Footer'

export const App = () => {
  return (
    <div className="page">
      <Header />

      <HappyCards />

      <Footer />
    </div>
  )
}
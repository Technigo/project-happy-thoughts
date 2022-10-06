import React from 'react'
import Header from './Components/Header'
import HappyCards from './Components/HappyCards'
import Footer from './Components/Footer'

export const App = () => {
  return (
    <div className="page">
      <Header />

      <HappyCards />

      <Footer />
    </div>
  )
}
import React from 'react'
import Header from './components/Header'
import HappyThoughtCards from './components/HappyThoughtCards'
import Footer from './components/Footer'

export const App = () => {

  return (
    <div className="page">
          <Header />
            <main>
              <HappyThoughtCards />
            </main>
            <Footer />
    </div>
  )
}

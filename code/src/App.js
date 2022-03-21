import React from 'react'
import Header from './components/Header'
import HappyThoughtCards from './components/HappyThoughtCards'
import ThoughtForm from './components/ThoughtForm'
import Footer from './components/Footer'


export const App = () => {


  return (
    <div>
          <Header />
            <main>
              <HappyThoughtCards />
              {/* <ThoughtForm /> */}
            </main>
            <Footer />
    </div>
  )
}

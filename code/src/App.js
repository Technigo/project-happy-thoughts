import React from 'react'
import Header from './components/Header'
import HappyThoughtCards from './components/HappyThoughtCards'
import ThoughtForm from './components/ThoughtForm'


export const App = () => {


  return (
    <div>
          <Header />
            <main>
              <HappyThoughtCards />
              <ThoughtForm />
            </main>
    </div>
  )
}

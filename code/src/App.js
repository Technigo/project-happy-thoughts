import React from 'react'
import InputThoughtField from './components/InputThoughtField'
import ListOfThoughts from './components/ListOfThoughts'
// import ThoughtCard from './components/ThoughtCard'
import Header from './components/Header'
import Footer from './components/Footer'
// import Moment from 'react-moment';
// import 'moment-timezone'

export const App = () => {
  return (
    <div>
      <Header />
      <div>
        <InputThoughtField />
        <ListOfThoughts />
      </div>
      <Footer />
    </div>
  )
}

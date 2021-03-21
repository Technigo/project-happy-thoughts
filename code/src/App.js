import React from 'react'
import MainTextField from './components/MainTextField'
import ListTextField from './components/ListTextField'
import Header from './components/Header'
import Footer from './components/Footer'
// import Moment from 'react-moment';
// import 'moment-timezone'

export const App = () => {
  return (
    <div>
      <Header />
      <MainTextField />
      <ListTextField />
      <Footer />
    </div>
  )
}

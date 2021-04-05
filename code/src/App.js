import React from 'react'
import InputThoughtField from './components/InputThoughtField'
import ListOfThoughts from './components/ListOfThoughts'
import Header from './components/Header'
import Footer from './components/Footer'


export const App = () => {
  return (
    <div className="page-wrapper">
        <Header />
        <InputThoughtField />
        <ListOfThoughts />
        <Footer />
    </div>
  )
}

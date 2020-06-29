import React from 'react'
import { NewThought } from './components/NewThought.js'
import { Thoughts } from './components/Thoughts.js'
import ReactGA from 'react-ga'
import './app.css'

export const App = () => {

  ReactGA.initialize('UA-171137939-1')

  return (
    <div className='app-container'>
      <NewThought />
      <Thoughts />
    </div>
  )
}

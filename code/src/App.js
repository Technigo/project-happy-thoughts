import React from 'react'
import { NewThought } from './components/NewThought.js'
import { Thoughts } from './components/Thoughts.js'
import ReactGA from 'react-ga'
import TagManager from 'react-gtm-module'
import './app.css'

export const App = () => {
  const tagManagerArgs = {
    gtmId: 'GTM-MVWQQ72'
}


TagManager.initialize(tagManagerArgs)
  ReactGA.initialize('UA-171137939-1')

  ReactGA.pageview('/homepage');

  return (
    <div className='app-container'>
      <NewThought />
      <Thoughts />
    </div>
  )
}

import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import './index.css'
import { App } from './App'
import TagManager from 'react-gtm-module'

ReactDOM.render(<App />, document.getElementById('root'))
ReactGA.initialize('UA-171137939-1')

const tagManagerArgs = {
    gtmId: 'GTM-MVWQQ72'
}

TagManager.initialize(tagManagerArgs)
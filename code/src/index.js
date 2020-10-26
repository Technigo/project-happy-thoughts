import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

JavascriptTimeAgo.locale(en)
// Importing react time ago package to be able to display messages in order of posting 

ReactDOM.render(<App />, document.getElementById('root'))

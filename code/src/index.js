import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { App } from './App'

JavascriptTimeAgo.locale(en)

ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import { Thoughts } from './components/Thoughts'
import './app.css'

export const App = () => {
  return (
    <>
      <header>
        <h1>Happy Thoughts</h1>
      </header>
      <Thoughts />
      <footer>
        <p className="project-description">Project 11 - Technigo Boot Camp</p>
      </footer>
    </>
  )
}

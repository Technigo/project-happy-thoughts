import React from 'react'
import { PostedThought } from 'PostedThought'
import './App.css'
import { NewThought } from 'NewThought'


export const App = () => {
  return (
    <div>
      <NewThought />
      <PostedThought />
    </div>
  )
}

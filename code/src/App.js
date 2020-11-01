import React from 'react';
import { HappyForm } from 'Components/happyForm'
import { HappyThought } from 'Components/happyThought'
import './App.css'

export const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const App = () => {
  return (
    <main>
      <HappyForm />
      <HappyThought />
    </main>
  )
}

import React from 'react';
import { HappyForm } from 'components/HappyForm'
import { HappyThought } from 'components/HappyThought'
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

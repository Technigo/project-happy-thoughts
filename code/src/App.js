import React from 'react'
import { Thoughts } from './Components/Thoughts'
import { Form } from './Components/Form'

export const App = () => {
  return (
    <div className='happy-thoughts-container'>
      <Form />
      <Thoughts />
    </div>
  )
}

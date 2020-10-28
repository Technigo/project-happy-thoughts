import React, { useState } from 'react'
import { HappyThought } from 'components/HappyThought.js'
import { HappyForm } from 'components/HappyForm.js'

const url = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const App = () => {
  return (
    <div>
      <HappyForm />
      <HappyThought />
    </div>
  )
}

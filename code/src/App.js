import React from 'react'
import Status from './Status'
import Form from './Form'

export const App = () => {
  return (
    <section>
      <div className="container">
        <Form />
        <Status />
      </div>
    </section>
  )
}

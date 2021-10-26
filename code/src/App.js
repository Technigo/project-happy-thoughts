import React from 'react'

import { Form } from 'Form'
import { Messages } from 'Messages'

export const App = ({ username, thoughts, setThoughts }) => {
  return (
    <div className='container'>
      <div className='main'>
        <Form
          thoughts={thoughts}
          setThoughts={setThoughts}
          username={username}
        />
        <Messages
          thoughts={thoughts}
          setThoughts={setThoughts}
          username={username}
        />
      </div>
    </div>
  )
}

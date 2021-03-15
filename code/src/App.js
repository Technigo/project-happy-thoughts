import React, { useState, useEffect } from 'react'
import moment from 'moment'

import Form from 'components/Form'
import Tought from 'components/Tought'

export const App = () => {
  const [thoughts, setThoughts] = useState([])

  useEffect(() => {
    fetch ('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    .then(res => res.json ())
    .then (json => setThoughts(json))
  
  }, []) 

  return (
    <div className="tought-container">
        <section className="tought-card">
        <Form />
        {thoughts.map(happymessage => (
          <Tought 
            key={happymessage._id}
            message = {happymessage.message} 
            heart = {happymessage.hearts}
            time = {moment(happymessage.createdAt).fromNow()}
          />
         
        ))}
        </section>
    </div>
  )
}

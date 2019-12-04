import React, { useState, useEffect } from 'react';
import './App.css'



export const App = () => {
  const [thouhgts, setThoughts] = useState([])
  const [messages, setMessages] = useState('')
  // const [submitted, setSubmitted] = useState(false)
  const [text, setText] = useState([])
  const [heart, setHeart] = useState()


  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com')
      .then(res => res.json())
      .then(json => setThoughts(json))
    // .then(json => console.log(json))


  })

  const handleFormSubmit = () => {
    // ssubmit and update thoughts
    // fetch to submit thought
  }

  const handleHeartClick = () => {
  }


  // const Form = () => {
  //   const [message, setMessage] = useState('')

  //   const submitHandler = () => {
  //     fetch('https://technigo-thoughts.herokuapp.com/', {
  //       method: 'POST',
  //       body: JSON.stringify({ message }),
  //       headers: { 'Content-Type': 'application/json' }
  //     }).catch(() => {
  //       alert('Something gone wrong, but stay positive and try again :)')
  //     })
  //   }

  return (
    <div>

      <form onSubmit={event => event.preventDefault()}>
        <div className="headForm">
          <p>What's making you happy right now?</p>

          <textarea className="form-text">

            {/* minLenght: 2;
          kMaxLength: 140; */}
          </textarea>


          {/* onChange={event => setText(event.target.value)}
          value={text}>

        /> */}

          <button onClick={handleFormSubmit}>❤️ Send happy thought ❤️</button>
        </div>
      </form>


      <section>
        <ul>
          {thouhgts.map(thought => (
            <li key={thought.message} className="messages">
              <div> {thought.message} </div>

              <div className="likes"><button onClick={handleHeartClick}>❤️</button>{thought.hearts}</div>

            </li>
          ))}

        </ul>
      </section>
    </div >

  )
}

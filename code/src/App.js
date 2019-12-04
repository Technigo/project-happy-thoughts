import React, { useState, useEffect } from 'react'
import { getThoughts, submitThought } from './smarts.js'
import Thought from 'Components/Thought.js'

const UPDATEFREQUENCY = 5000 /* Interval for new fetch from server in ms */

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [reloadThoughts, setReloadThoughts] = useState(false) /* The bool value is never used, this is only to trigger the useEffect by forcing a state change */
  const [message, setMessage] = useState('') /* Message captured to be sent as Thought */
  const [allowSubmit, setAllowSubmit] = useState(false) /* Variable used for allowing submitting the form (and some styling as well) */

  useEffect(() => { /* only allow submitting valid messages */
    if(message.length >= 5 && message.length <= 140) {
      setAllowSubmit(true)
    } else {
      setAllowSubmit(false)
    }
  }, [message])

  useEffect(() => {
    getThoughts(setThoughts) /* load thoughts */
  }, [reloadThoughts])
  
  useEffect(() => {

    const interval = setInterval(() => {
      setReloadThoughts(flip => !flip)
    }, UPDATEFREQUENCY);
    return () => clearInterval(interval)
  })

  return (
    <div>
      <main>
        <section>
          <article className="input-box">
            <form
              noValidate
              onSubmit={allowSubmit ? 
                event => submitThought(event, message, setThoughts, setMessage) : 
                event => event.preventDefault()
              }
            >
              <textarea 
                type="input"
                value={message}
                name="happy thought"
                placeholder="Write a happy thought"
                onChange={event => {
                  setMessage(event.target.value)
                }}
                required
                maxLength="140"
              />
              <p className="error-message">{!allowSubmit && 'The message should be between 5-140 characters.'} </p>
              <button 
                type="submit"
                disabled={!allowSubmit}
              > 
                {allowSubmit && <img src='/images/like.svg' alt="Likes" className="heart"/>}
                <p>Send happy thought</p>
                {allowSubmit && <img src='/images/like.svg' alt="Likes" className="heart"/>}
              </button>
            </form>
          </article>
        </section>
        <hr />
        <section>
          <h2>Happy thoughts</h2>
          {thoughts.map((thought) => {
            return(
              <Thought 
                key={thought._id}
                id={thought._id}
                text={thought.message}
                likes={thought.hearts} 
                time={thought.createdAt}
                setReloadThoughts={setReloadThoughts}
              />
            )
          })}
        </section>
      </main>
      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  )
}

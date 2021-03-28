import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { API_URL_THOUGHTS } from './reusable/urls'
import { API_URL_HEARTS } from './reusable/urls'

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]) // state properties initialized as an empty array
  const [thoughtNew, setThoughtNew] = useState('') // state properties initialized as an empty string

  useEffect(() => {    // useEffect hook
    fetchThoughtList()
  }, [])

  const fetchThoughtList = () => {  // GET fetch request for resent thoughts
    fetch(API_URL_THOUGHTS)
      .then(res => res.json()) // response unpacked
      .then(thoughts => setThoughtList(thoughts)) // data recieved and applied
      .catch(err => console.error(err))
  }

  const onThoughtNewChanged = (event) => {
    setThoughtNew(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    window.location.reload()
    event.target.reset()
    //console.log('Form Submitted!', thoughtNew)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: thoughtNew })
    };

    fetch(API_URL_THOUGHTS, options)
      .then(res => res.json())
      .then(receivedThought => setThoughtList([...thoughtList, receivedThought]))
      .catch(err => console.error(err));
  }
  const onHeartsIncrease = (id) => {
    const options = {
      method: 'POST',  // POST fetch request
      headers: {
        'Content-Type': 'application/json' // text message for a new thought in json format is going to be sent
      }
    }

    fetch(API_URL_HEARTS(id), options)
      .then(res => res.json())
      .then(recievedThought => {
        const updateThoughtList = thoughtList.map(thought => {
          if (thought._id === recievedThought._id) {// only id could be used of instead recievedThought._id
            thought.hearts += 1  // The if statement will only work for the thought clicked on
          }
          return thought
        })
        setThoughtList(updateThoughtList)
      })
      .catch(err => console.error(err))
  }

  //fetchThoughtList()

  return (
    <section className="section">
      <form className="form" onSubmit={onFormSubmit}>
        <label className="form-title" htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          className="input"
          maxlength="140"
          id="newThought"
          type="text"
          value={thoughtNew}
          onChange={onThoughtNewChanged}
        />
        <button className="thought-button" type="submit"><span className="heart" role="img" aria-label="heart">❤️</span>  Send Happy Thought  <span className="heart" role="img" aria-label="heart">❤️</span></button>
      </form>
      {thoughtList.map(thought => (
        <article className="article" key={thought._id}>
          <p className="thought-message">{thought.message}</p>
          <div className="thought-info">
            <div className="thought-hearts">
              <button className={thought.hearts > 0 ? 'heart-button-clicked' : 'heart-button-unclicked'} onClick={() => onHeartsIncrease(thought._id)}>
                <div className="heart-button">
                  <span className="heart" role="img" aria-label="heart">❤️</span>
                </div>
              </button>
              <p className="number-of-hearts"> x {thought.hearts}</p>
            </div>
            <p className="post-time">{moment(thought.createdAt).fromNow()}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

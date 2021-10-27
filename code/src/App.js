import React, { useEffect, useState } from "react"
// import moment from "moment"

import ThoughtsInput from "components/ThoughtsInput"
import ThoughtsList from "components/ThoughtsList"

import { API_URL, API_URL_LIKE } from "reusables/urls"

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  // const [like, setNewLike] = useState("")

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data))
  }, [])

  const onThoughtsInputChange = (e) => {
    setNewThought(e.target.value)
  }

  const onThoughtsInputSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]))

    // fetch(API_URL_LIKE)
    //   .then((res) => res.json())
    //   .then((data) => setNewLike([data, ...thoughts]))
  }

  return (
    <div>
      <ThoughtsInput
        onThoughtsInputSubmit={onThoughtsInputSubmit}
        onThoughtsInputChange={onThoughtsInputChange}
        newThought={newThought}
      />

      <ThoughtsList thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  )
}

{
  /* <form onSubmit={onThoughtSubmit}>
<label htmlFor="NewThought">Write your thought</label>
<input
  id="newThought"
  type="text"
  value={newThought}
  onChange={(e) => setNewThought(e.target.value)}
/>
<button type="submit">Send!</button>
</form>

{thoughts.map((thought) => (
<div key={thought._id}>
  {" "}
  <p>{thought.message}</p>
  <button>&hearts; {thought.hearts}</button>
  <p className="date">
    - Created at: {moment(thought.createdAt).fromNow()}
  </p>
</div>
))} */
}

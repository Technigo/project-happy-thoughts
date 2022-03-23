import React, { useState } from "react"

const SubmitThoughts = () => {
  const [newThought, setNewThought] = useState("")

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", option)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(() => setNewThought(""))
  }

  return (
    <form className="post" onSubmit={onFormSubmit}>
      <label>What's making you happy right now?</label>
      <textarea value={newThought} onChange={handleNewThoughtChange} />
      <button className="button" type="submit">
        ❤️Send Happy Thought❤️
      </button>
    </form>
  )
}

export default SubmitThoughts

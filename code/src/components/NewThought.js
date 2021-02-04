import React, { useState } from 'react'

export const NewThought = () => {
  const [newThought, setNewThought] = useState("")

  const onChangeThought = () => {
    fetch(`https://happy-thoughts-dess.herokuapp.com/thoughts`, {
      method: "POST",
      body: JSON.stringify({ message: newThought }),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then(() => {
        window.location.reload()
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onChangeThought()
    setNewThought('')
  }

  const handleMessages = e => {
    setNewThought(e.target.value)
  }


  return (
    <div className="new-thought-section">
      <form onSubmit={handleSubmit}>
        <h2>What's making you happy right now?</h2>
        <textarea
          id="newHappyThought"
          name="newHappyThought"
          rows="5"
          cols="36"
          value={newThought}
          onChange={handleMessages}
          required
        />
        <br></br>
        <div className="button-section-newthought">
          <button
            className="submit-button"
            type="submit"
            value="Submit"
            onClick={handleSubmit}>
            <span role="img" aria-label="heart">❤️</span>
                Send happy thought
                <span role="img" aria-label="heart">❤️</span>
          </button>
          <h3>{newThought.length} / 140 </h3>
        </div>
      </form>
    </div >
  )
}
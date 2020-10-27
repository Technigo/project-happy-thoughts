import React, { useState } from 'react'



const charLeft = event => {
  const maxChar = 140
  const txtInput = document.getElementsByClassName("form-text")
  const count = document.getElementsByClassName("counter")
  count.innerHTML = maxChar
  
  txtInput.addEventListener("keydown", count)

  var length = txtInput.value.length
    if (length >= maxChar) {
      event.preventDeafult()
    } else {
      count.innerHTML = maxChar - length-1
    }
}

export const NewPost = () => {
  const post_url = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const [thought, setThought] = useState([""])
  

  const handleSubmit = event => {
    event.preventDefault()
    // validate length of post
    // show number of characters typed in txt field/ characters remaining out of 140
    // - When POSTing a new thought, if the message was empty, too long, or too short, you get an error message back from the API. Use this to set some sort of `error` state to show a friendly message to your user. (Hint: Use the network tab of the developer tools in your browser)

    fetch(post_url, 
      {
        method:'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ message: thought })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <form
      onSubmit={handleSubmit}>
      <p className="post-prompt">What's making you happy right now?</p>
      <textarea
        className="form-text"
        onChange={event => setThought(event.target.value)}
        rows="2"
        columns="100"
        maxlength="140"
        spellCheck="true"
        name="text"
        required>
      </textarea>
      <span 
        className="counter">
          {charLeft}
      </span>
      <button 
        className="submit-button" 
        value="Add Thought">
        <span 
          className="post-span"
          role="heart emoji">❤️</span>
            &nbsp;Send Happy Thought
        <span 
          className="post-span"
          role="heart emoji"
          >❤️</span>
      </button>
    </form>
  )
}

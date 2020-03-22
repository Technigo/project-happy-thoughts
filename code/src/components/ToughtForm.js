import React from 'react'
import '../components/toughtform.css'

export const ToughtForm = () => {
// En state att spara user input data i. Sedan uppdatera och skicka när man klickar på knappen.

  const handleLike = () => {
  }

  return (
    <article className="toughtForm">
      <p className="toughtText">Whats making you happy right now?</p>

      <form>
        <lable>
          <textarea 
          type="text"
          name="happyToughtsInput"
          placeholder="Write something nice here!"
          rows="3" 
          cols="63"
          maxLength="140"
          />
        </lable>
        <span className="sendToughtButton" onClick={() => handleLike()}>❤️Send Happy Thought❤️</span>
      </form>

    </article>
  )
}
import React from 'react'
import '../components/toughtform.css'

export const ToughtForm = () => {
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
          />
        </lable>        
      </form>

    </article>
  )
}
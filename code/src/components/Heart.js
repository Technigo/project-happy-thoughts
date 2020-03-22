import React, { useState } from 'react'

//POST https://technigo-thoughts.herokuapp.com/THOUGHT_ID/like

export const Heart = props => {

  return (
    <form>
    
        <button onClick={handleSubmit} className="send-like-button"
          type="submit">
          <span>❤</span>
        </button>
      
    </form>
  )
}
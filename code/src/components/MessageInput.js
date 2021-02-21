import React, { useState } from 'react'

import '../styling/MessageInput.css'

export const MessageInput = () => {
  return(
    <form>
      <input
        type="text"
        className="form-text">
      </input>
      <input 
        type="submit"
        className="form-button"
        value="Add Message"
        >
      </input>
    </form>
  )
}
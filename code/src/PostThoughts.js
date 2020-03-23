import React from 'react'
import { Emoji } from "./Emoji"
import './PostThoughts.css'

export const PostThoughts = () => {

  return (
    <form className="post-thoughts">
      <h2>What's making you happy right now?</h2>
      <input
        type="text"
        required
      />
      <div>
        <Emoji symbol="❤️" />
        <button>Send happy-thought</button>
        <Emoji symbol="❤️" />
      </div>
    </form>
  )
}
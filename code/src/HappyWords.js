import React from "react"


export const HappyWords = ({happyWords, setHappyWords}) => {
    return (
    
      <div className="HappyThoughtInput">
        <label>
        <h2>What's making you happy right now?</h2>
          <input
            type="text"
            value={happyWords}
            onChange={event => setHappyWords (event.target.value)}
            required
          />
        </label> 
        <button type="submit" className="SubmitButton" onChange={event => setHappyWords(event.target.value)} disabled={happyWords === " "}>Send Happy Thought </button>
      </div>
    ) 
}

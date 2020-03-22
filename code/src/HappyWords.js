import React from "react"


export const HappyWords = ({happyWords, setHappyWords}) => {
    return (
    
      <div className="HappyThoughtInput">
        <label>
        <h2>What made you happy today?</h2>
          <input
            type="text"
            value={happyWords}
            onChange={event => setHappyWords (event.target.value)}
            required
          />
        </label> 
      </div>
    ) 
}

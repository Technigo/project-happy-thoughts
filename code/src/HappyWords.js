import React from "react"


export const HappyWords = ({happyWords, handleSubmit, setHappyWords, }) => {
    return (
      <form className="FormDiv" onSubmit ={handleSubmit}>
      <div className="HappyThoughtInput">
        
        <label>
            <h2>What's making you happy right now?</h2>
            <textarea
            rows="3"
            type="text"
            value={happyWords}
            onChange={event => setHappyWords (event.target.value)}
            required
          ></textarea>

        </label> 
        <div className="FormFooter">
          
          <button 
            type="submit" 
            className="SubmitButton" 
            onChange={event => setHappyWords(event.target.value)} 
            disabled={happyWords.length < 5 || happyWords.length > 140 ? true : false}
            ><span aria-label="click to like">{`❤️`} 
            </span>Send Happy Thought <span aria-label="click to like">{`❤️`} 
            </span>
          </button>
          <p className="HappyWordsCount">{HappyWords.length} / 140</p>
        </div>      
      </div>
      </form>
    ) 
    
}

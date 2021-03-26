import React from 'react'

const MessageForm = ({newMessage, onNewMessageChange, onFormSubmit}) => { //what does destructuring means, just instead of naming props.XX?
  return (
      <form onSubmit={onFormSubmit}> {/*why a form? is it due to a submit button?  */}
        <div className="send-message-card">What makes you happy right now?
          <div>
            <label htmlFor="newMessage"></label>
            <textarea aria-label="write your happy thoughts here"
              className="input-field"
              placeholder="Your happy thoughts here"
              id="newMessage"
              type="text"
              value={newMessage}
              onChange={onNewMessageChange}
            >
            </textarea>
          </div>
          <button 
            type ="submit"
            className="submit-button">
            <span 
              aria-label="upload happy thoughts here" 
              role="img"
            >
              &nbsp; &#10084;&#65039; &nbsp; Upload happiness&nbsp; &#10084;&#65039; &nbsp;
            </span>
          </button> 
        </div>
      </form>
  )
}

export default MessageForm
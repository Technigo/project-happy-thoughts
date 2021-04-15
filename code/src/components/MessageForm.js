import React from 'react'

const MessageForm = ({newMessage, onNewMessageChange, onFormSubmit}) => { 
  return (
      <form onSubmit={onFormSubmit}> 
        <div className="send-message-card">What makes you happy right now?
          <div class="textarea-container">
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
          <div className="characters-counter">
            <span className={newMessage.length < 140 ? "character-counter" : "character-counter red-counter"}>{140-newMessage.length} /140</span> 
          </div>
          <button 
            type ="submit"
            className="submit-button"
            disabled={newMessage.length < 5 || newMessage.length > 140}
          >
            <span 
              aria-label="upload happy thoughts here" 
              role="img"
            >
             &nbsp; &#10084;&#65039; &nbsp; Upload happiness&nbsp; &#10084;&#65039; &nbsp;   {/* is there a cleaner way of typing spaces?*/}
            </span>
          </button> 
        </div>
      </form>
  )
}

export default MessageForm
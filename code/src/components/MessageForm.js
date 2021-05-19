import React from 'react';


const MessageForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
    return (
        <form className ="happy-form" onSubmit={onFormSubmit}>
        <label className="message-field" htmlFor="messageNew">Share your most happy thoughts!</label>
        <input className="message-field" 
        id="messageNew"
        type="text"
        placeholder="Write happy thoughts here :)"
        value={messageNew}
        minLength="5"
        maxLength="140"
        onChange={onMessageNewChange}    
      />
      
        <button 
        className="submit-button" 
        type="submit"
        >
          ❤ Send happy thoughts ❤
        </button>
        
      </form>
    );

}

export default MessageForm;
import React from 'react'
 

const Form = ({newMessage, onNewMessage, onFormSubmit}) => {
    

return(

        <form id="form" 
        onSubmit={onFormSubmit}>

            <div className="input-group">
                <label>What's making you happy right now?
                    <input type="text" 
                    name="text" 
                    value={newMessage}
                    className="text-input"
                    onChange={onNewMessage}/>
                </label>
            </div>

            <div className="btn-group">
                <button 
                type="submit"
                className="send-button"> 
                    <span role="img" aria-label="heart emoji">❤️</span>
                    Send Happy Thought
                    <span role="img" aria-label="heart emoji">❤️</span>
                </button>
            </div>

        </form>
)
}

export default Form

import React from 'react'
 

const Form = ({newMessage, onNewMessage, onFormSubmit}) => {

    // if (newMessage.length > 10) {
    //     return ( <p>Your message is too long</p>)
    // }
    

return(

        <form id="form" 
        onSubmit={onFormSubmit}>

            <div className="input-group">
                <label htmlFor="newMessage" key="newMessage">What's making you happy right now?

                    <textarea type="text" 
                    name="newMessage" 
                    value={newMessage}
                    className="text-input" 
                    onChange={onNewMessage}
                    
                    />
                    
                </label>

            </div>


            <div className="btn-group">
                <button 
                disabled={newMessage.length < 5}
                type="submit"
                className="send-btn"> 
                    <span role="img" aria-label="heart emoji">❤️ </span> Send Happy Thought <span role="img" aria-label="heart emoji"> ❤️</span>
                </button>

                <span 
                className={newMessage.length > 140 ? "characters red-text" : "characters"}>
                    {0 + newMessage.length}/140
                </span>


            </div>

        </form>
)
}

export default Form

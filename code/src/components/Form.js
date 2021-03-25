import React from 'react'

const Form = ({messageNew, OnInputMessage, onFormSubmit}) => {
    let words = messageNew.length


    console.log(messageNew.length)

   

    return (
        
        <form className="form-section" onSubmit={onFormSubmit}>
            <div className="input-section">
            <div className="input-section-box">
                <div>
                    <label htmlFor="newMessage">What's making you happy right now?</label>
                </div>
                <div className="input-container">
                    <textarea
                    className="input"
                    id="newMessage"
                    type="text" 
                    value={messageNew}
                    onChange={OnInputMessage}
                    cols="40" 
                    rows="6"
                    
                    />
                    </div>
                <div>
                    <button className="submit-btn" type="submit">
                    <span className="likes">&#10084;</span> Send Happy Thought! <span className="likes">&#10084;</span>
                    </button>
                    <p>Words: {words}</p>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Form


/*<input
                    className="input"
                    id="newMessage"
                    type="text" 
                    value={messageNew}
                    onChange={OnInputMessage}
                    />*/ 
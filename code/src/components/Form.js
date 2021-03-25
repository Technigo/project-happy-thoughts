import React from 'react'

const Form = ({messageNew, OnInputMessage, onFormSubmit}) => {

   

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
                    rows="8"
                    />
                    </div>
                <div>
                    <button className="submit-btn" type="submit">
                    <span className="likes">&#10084;</span> Send Gappy Thought! <span className="likes">&#10084;</span>
                    </button>
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
import React from 'react'

const Form = ({messageNew, OnInputMessage, onFormSubmit}) => {
    let words = messageNew.length
    return (
        
        <form className="form-section" onSubmit={onFormSubmit}>
            <div className="input-section">
            <div className="input-section-box">
                <div>
                    <label htmlFor="newMessage"><h4 className="question">What's making you happy right now?</h4></label>
                </div>
                <div className="input-container">
                    <textarea
                    className={words === 140 ? "input red" : "input"}
                    id="newMessage"
                    type="text" 
                    value={messageNew}
                    onChange={OnInputMessage}
                    cols="40" 
                    rows="6"
                    maxLength="140"
                    placeholder="Please type your thoughts here. Maximum 140 characters allowed."
                    />
                </div>
                <div className="bottom-section">
                    <button className="submit-btn" type="submit" >
                    <span className="likes">&#10084;</span> Send Happy Thought! <span className="likes">&#10084;</span>
                    </button>
                    <p>Characters : {words} of 140 <span>(minimum 4 characters)</span></p>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Form

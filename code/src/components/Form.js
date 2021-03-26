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
                    //className="input"
                    className={words === 140 ? "input red" : "input"}
                    id="newMessage"
                    type="text" 
                    value={messageNew} // kanske en ternary operator? {messageNew}
                    onChange={OnInputMessage}
                    cols="40" 
                    rows="6"
                    maxLength="140"
                    placeholder="Please type your thought here, maximum 140 charachters"
                    
                    />
                    </div>
                <div>
                    <button className="submit-btn" type="submit" >
                    <span className="likes">&#10084;</span> Send Happy Thought! <span className="likes">&#10084;</span>
                    </button>
                    <p>Characters : {words} of 140 <span>(minimum 4 characters )</span></p>
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
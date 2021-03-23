import React from 'react'

const Form = ({messageNew, setMessageNew}) => {

    const OnInputMessage = (event) => { // This one updates the data inside our fetched data with the text we are writing in the input box 
        setMessageNew(event.target.value)
      }

    return (
        <div className="input-section">
            <div className="input-section-box">
                <div>
                    <label htmlFor="newMessage">Write new message</label>
                </div>
                <div>
                    <input
                    id="newMessage"
                    type="text" 
                    value={messageNew}
                    onChange={OnInputMessage}
                    />
                </div>
                <div>
                    <button className="sub-btn" type="submit">
                    <span className="heart-icon">&#10084;</span> Send Gappy Thought! <span className="heart-icon">&#10084;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form
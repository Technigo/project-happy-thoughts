/* eslint-disable*/

import React from 'react'

const SubmissionForm = ({ messageNew, onMessageNewChange, onFormSubmit}) => {
    return (
        <form className="form" onSubmit={onFormSubmit}>
                <label htmlFor="newMessage">What's make you happy right now?</label>
                <input className="input"
                    id="newMessage"
                    type="text"
                    
                    value={messageNew}
                    onChange={onMessageNewChange}
                />    
                <button className="btn-submit" type="submit">💗 Send Happy Thought 💗</button>

            </form>

    )

} 

export default SubmissionForm
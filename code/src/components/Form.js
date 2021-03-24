import React from 'react'

export const Form = ({ messageNew ,setMessageNew, onFormSubmit }) => {

    const onMessageNewChange = (event) => {
        setMessageNew(event.target.value)
      }

    return (
        <div className='input-form-container'>
            <form className='form-container' onSubmit={onFormSubmit}>
                <label htmlFor="newMessage">What's making you happy right now?</label>
                <input 
                    id="newMessage"
                    type="text"
                    value={messageNew}
                    onChange={onMessageNewChange}
                />
                <button className='button' type="submit">❤️️ Send happy thoughts! ❤️️</button>
            </form>
        </div>
    )

}
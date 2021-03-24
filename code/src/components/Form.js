import React from 'react'

export const Form = ({ messageNew ,setMessageNew, onFormSubmit }) => {

    const onMessageNewChange = (event) => {
        setMessageNew(event.target.value)
      }

    return (
        <>
            <form className='form-container' onSubmit={onFormSubmit}>
                <label htmlFor="newMessage">What's making you happy right now?</label>
                <input 
                    id="newMessage"
                    type="text"
                    rows='5'
                    value={messageNew}
                    placeholder="Type message here :)"
                    onChange={onMessageNewChange}
                    minlength= "5"
                    maxlength = "140"
                />
                <button className='button' type="submit">❤️️ Send happy thoughts! ❤️️</button>
            </form>
        </>
    )

}
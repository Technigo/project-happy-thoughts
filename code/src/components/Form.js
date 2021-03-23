import React from 'react'

const Form = ({messageNew, setMessageNew}) => {

    const OnInputMessage = (event) => { // This one updates the data inside our fetched data with the text we are writing in the input box 
        setMessageNew(event.target.value)
      }

    return (
        <>
        <label htmlFor="newMessage">Write new message</label>
        <input
        id="newMessage"
        type="text" 
        value={messageNew}
        onChange={OnInputMessage}
        />
        <button type="submit">Send Message!</button>
        </>
    )
}

export default Form
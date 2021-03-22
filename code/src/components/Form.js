import React from 'react'

export const Form = ({messageNew ,setMessageNew}) => {

    const onMessageNewChange = (event) => {
        setMessageNew(event.target.value)
      }

    return (
        <div className='input-form-container'>
        <label htmlFor="newThought">What's making you happy right now?</label>
        <input 
            id="newThought"
            type="text"
            value={messageNew}
            onChange={onMessageNewChange}
        />
        </div>
    )

}
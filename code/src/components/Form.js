import React from 'react'

export const Form = ({ messageNew ,setMessageNew, onFormSubmit }) => {

    const onMessageNewChange = (event) => {
        setMessageNew(event.target.value)
      }

    return (
        <>
            <form className='form-container' onSubmit={onFormSubmit}>
                <label htmlFor='newMessage'>What's making you happy right now?</label>
                <textarea 
                    id='newMessage'
                    type='text'
                    rows='5'
                    value={messageNew}
                    placeholder='Tell us all about it :)'
                    onChange={onMessageNewChange}
                    // minLength= '5'
                    className = {messageNew.length > 140 ? 'textarea-invalid' : 'textarea-valid'}
                />
                <div className='submit-charcount-container'>
                    <button 
                        className='button' 
                        type='submit'
                        value={messageNew}
                        // disabled={messageNew.length < 5 || messageNew.length > 140}
                    >
                        <span role='img' aria-label='heart emoji'>❤️️</span> Send happy thoughts! <span role='img' aria-label='heart emoji'>❤️️</span>
                    </button>
                    <p>{messageNew.length}/140</p>
                </div>
                
            </form>
        </>
    )

}
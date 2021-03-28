import React from 'react'

export const Form = ({ messageNew ,setMessageNew, onFormSubmit }) => {

    const onMessageNewChange = (event) => {
        setMessageNew(event.target.value)
      }

    return (
        <>
            <form className='form-container' onSubmit={onFormSubmit}>
                <label tabIndex='0' htmlFor='newMessage'>What's making you happy right now?</label>
                <textarea 
                    id='newMessage'
                    type='text'
                    rows='5'
                    value={messageNew}
                    placeholder='Tell us all about it :)'
                    onChange={onMessageNewChange}
                    className = {messageNew.length > 140 ? 'textarea-invalid' : 'textarea-valid'}
                />
                <div className='submit-charcount-container'>
                    <button 
                        className='button' 
                        type='submit'
                        value={messageNew}
                        tabIndex='0'
                        aria-pressed='false'
                        aria-label='Submit message'
                    >
                        <img className='heart-img' 
                             src={process.env.PUBLIC_URL + './icons/favourite.png'}
                             alt='heart' 
                        />
                        Send happy thoughts!
                        <img className='heart-img' 
                             src={process.env.PUBLIC_URL + './icons/favourite.png'}
                             alt='heart' 
                        /> 
                    </button>
                    <p>{messageNew.length}/140</p>
                </div>
            </form>
        </>
    )

}
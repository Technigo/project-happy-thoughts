import React from 'react'

export const Form = ({ messageNew ,setMessageNew, userName, setUserName, onFormSubmit }) => {

    const onMessageNewChange = (event) => {
        setMessageNew(event.target.value)
      }

      const onUserNameChange = (event) => {
        setUserName(event.target.value)
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
                <p className='char-counter'>{messageNew.length}/140</p>
                <label tabIndex='0' htmlFor='newUser' className='sign-label'>
                    Sign as:
                    <input 
                        id='newUser'
                        type='text'
                        value={userName}
                        onChange={onUserNameChange}
                        className = {userName.length > 20 ? 'textarea-invalid' : 'textarea-valid'}
                    />
                </label>
                <button 
                    className='button' 
                    type='submit'
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
            </form>
        </>
    )

}
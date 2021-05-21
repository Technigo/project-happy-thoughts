import React from 'react'

const ErrorMessage = ({ setErrorMessage }) => {
    return (
        <div className='error-message'>
            <p>
                Oops! Something went wrong. Your happy thought must be "lagom" as we say in Sweden. Between 5 and 140 characters
                to be exact. No more, no less. Oh and the name must also be under 20 characters :).
            </p>
            <button
                className='try-again-button' 
                type='button'
                tabIndex='0'
                aria-pressed='false'
                aria-label='return to start page'
                onClick ={() => setErrorMessage(prev => !prev)} 
            >
                <img className='heart-img' 
                     src={process.env.PUBLIC_URL + './icons/favourite.png'}
                     alt='heart' 
                /> 
                Try again!
                <img className='heart-img' 
                     src={process.env.PUBLIC_URL + './icons/favourite.png'}
                     alt='heart' 
                /> 
            </button>
        </div>
    )
}

export default ErrorMessage


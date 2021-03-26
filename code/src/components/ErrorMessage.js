import React from 'react'

const backToStart = () => {
    document.location.reload()
  };

const ErrorMessage = () => {
    return (
        <div className='error-message'>
        <p>
            Oops! Something went wrong. Your happy thought must be "lagom" as we say in Sweden. Between 5 and 140 characters
            to be exact. No more, no less :). 
        </p>
        <button
            className='try-again-button' 
            type='button'
            tabIndex='0'
            aria-pressed='false'
            aria-label='return to start page'
            onClick ={backToStart}
        >
            <span role='img' aria-label='heart emoji'>❤️️</span> 
            Try again!
            <span role='img' aria-label='heart emoji'>❤️️</span>
        </button>
        </div>
    )
}

export default ErrorMessage


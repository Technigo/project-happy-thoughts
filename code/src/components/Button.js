import React from 'react'

const Button = ({message, onButtonClick}) => {
    return (
        <button
            className='button'
            disabled={message.length < 6 || message.length > 140}
            onClick={event => onButtonClick(event)}
        >
            Send!
        </button>
    )
}

export default Button;

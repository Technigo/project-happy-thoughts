import React from 'react'

const Button = ({message, className}) => {
    return (
        <button
            className={className}
            // disabled={message.length < 6 || message.length > 140}
            // onClick={event => onButtonClick(event)}
        >
            {message}

        </button>
    )
}

export default Button;

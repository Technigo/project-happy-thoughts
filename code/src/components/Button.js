import React from 'react'

const Button = ({message, className, type}) => {
    return (
        <button
            className={className}
            type={type}
            // disabled={message.length < 6 || message.length > 140}
            // onClick={event => onButtonClick(event)}
        >
            {message}

        </button>
    )
}

export default Button;

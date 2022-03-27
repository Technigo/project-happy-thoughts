import React from 'react'

const Button = ({
    message,
    className,
    type,
    disabled,
    onClick,
    thought=''
    }) => {

    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            disabled={disabled}
            id={thought._id}
        >
            {message}
        </button>
    )
}

export default Button;

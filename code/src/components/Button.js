import React from 'react'

const Button = ({message, imgSrc}) => {
    return (
        <button
            className='button'
            // disabled={message.length < 6 || message.length > 140}
            // onClick={event => onButtonClick(event)}
        >
            <img alt='heart-button' src={imgSrc} height="20px" width="20px"/>

        </button>
    )
}

export default Button;

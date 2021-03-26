import React from 'react' 

const Button = ({buttonText, onPageChange, buttonType="button"}) => {
    return (
        <button class="button">
            {buttonText}
        </button>
    )
}

export default Button;
import React from 'react';

export const SubmitButton = () => {
    return (
        <button 
        className="submit-btn" 
        type="submit"
        >
            <span role="img" aria-label="heart emoji">❤️</span> 
            Send happy thought! 
            <span role="img" aria-label="heart emoji">❤️</span>
        </button>
    )
}
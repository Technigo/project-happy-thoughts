import React, { useState } from 'react'
import './HeartButtonStyle.css'


export const HeartButton2 = props => {
    const {_id} 

    const handleClick = () => {
      fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
        method: 'POST',
        body: '',
        headers: { 'Content-Type': 'application/json' }
      }).then(() => onLiked(_id))
    }


    return (
        <div>
            <button  
                type="submit"
                onClick={handleClick}
                className="heart-button"
            >
                <span role='img' aria-label='Heart'>
                💗
                </span>
            </button>
        </div>
    )
}
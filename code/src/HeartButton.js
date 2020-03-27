import React, { useState } from 'react'
import './HeartButtonStyle.css'

export const HeartButton = () => {
    const GIVE_LIKE_URL = "https://technigo-thoughts.herokuapp.com/${_id}/like"
    const [heart, setHeart] = useState("")

    const handleClick= () => {
    
    fetch(GIVE_LIKE_URL,
        {
            method: 'POST',
            body: '',
            headers: {'Content-Type': 'application/json' },
        }
    ).then(()=>{
        window.location.reload()
    })
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
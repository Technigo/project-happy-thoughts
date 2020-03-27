import React, { useState } from 'react'
import './PostMessagesStyle.css'

export const PostMessages = () => {
    const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com/"
    const [happyThougths, setHappyThougths] = useState("")

    const handleSubmit = event => {
    event.preventDefault()

    fetch(MESSAGES_URL,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: happyThougths })
        }
    ).then(()=>{
        window.location.reload()
    })
    }

    return (
        <div className="input-box">
            <h5>What's making you happy right now?</h5>
            <form>
                <textarea
                    rows='3'
                    value={happyThougths}
                    onChange={event => setHappyThougths(event.target.value)}
                >
                </textarea>
                <button 
                    type="submit"
                    onClick={handleSubmit}
                    className="input-button"
                    disabled={happyThougths.length < 5 || happyThougths.length > 140}
                    >
                    💗 Send happy thought 💗
                </button>
                <p className='letter-counting'>{happyThougths.length}/140</p>
            </form>
        </div>
    )
}
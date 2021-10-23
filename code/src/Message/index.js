import React from 'react'
import { Like } from 'Like'
import './message.css'

export const Message = ({ thougth }) => {
    const message = thougth.message;
    const date = thougth.createdAt;
    const hearts = thougth.hearts;

    return (
        <div className="message-container">
            <h3 className="message">{message}</h3>
            <div className="message-botton-container">
                <Like hearts={hearts} />
                <p className="message-date">{date}</p>
            </div>
        </div>
    )
}

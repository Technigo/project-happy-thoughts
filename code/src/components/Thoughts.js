import React, {useState, useEffect} from 'react'
import moment from 'moment'

import {NewThought} from 'components/NewThought'

export const Thoughts = () => {
    const [messages, setMessages] = useState([])

    const ThoughtsURL= "https://happy-thoughts-technigo.herokuapp.com/thoughts"
    
    useEffect(() => {
    fetch(ThoughtsURL)
    .then (response => response.json())
    .then ((thoughts) => {
        console.log(thoughts)
        setMessages(thoughts)
    })}, [])

    return (
        <section className="thought-list">
            <NewThought />
        {messages.map(message => {
            return(
                
            <div className="thought-container" key={message._id}>
                <p className="thought-text">{message.message}</p>
                <div className="details">
                    <div className="like-container">
                    <span className="heart-icon" role="img">❤️️</span>
                    <p className="thought-date"> x {message.hearts}</p>
                    </div>
                    <p className="thought-date">{moment(message.createdAt).fromNow()}</p>
                </div>
            </div>
            )
        })}
        </section>
    )
}
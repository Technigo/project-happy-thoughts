import React, { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'

import API_URL from 'utils/Api'

import Message from 'components/Message'
import SentMessage from 'components/SentMessage'


export const Collection = () => {

    const [fetchThought, setFetchThought] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetchThoughts()
    }, [])

    const fetchThoughts = () => {
        setLoading(true)
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => setNewMessage(data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }

    const onFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: newMessage }),
        }

        fetch(API_URL, options)
            .then(res => res.json())
            .then(data => console.log(data))
            .finally(() => window.location.reload())

    }

    const onNewMessageChange = (event) => {
        setNewMessage(event.target.value)
    }


    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setFetchThought(data))
    }, [])

    console.log(fetchThought)

    return (
        <div>
            <Message
                loading={loading}
                onNewMessageChange={onNewMessageChange}
                onFormSubmit={onFormSubmit} />

            <SentMessage
            newMessage={newMessage} />
            <section className="sent-message-container">
                {fetchThought.map(message => (
                    <article key={message._id}>
                        <p>{message.message}</p>
                        <p>{formatDistance(new Date(message.createdAt), Date.now(), {
                            addSuffix: true,
                        })}</p>
                    </article>
                ))}
            </section>
        </div>
    )
}


export default Collection

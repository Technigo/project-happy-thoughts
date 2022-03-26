import React, { useEffect, useState } from 'react'

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

        const token = {
            method: 'GET',
            headers: {
                Authorization: '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'
            }
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: newMessage }),
        }



        fetch(API_URL, options, token)
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


    return (
        <div>
            <Message
                loading={loading}
                onNewMessageChange={onNewMessageChange}
                onFormSubmit={onFormSubmit} />

            <SentMessage
                newMessage={newMessage}
                fetchThought={fetchThought} />
        </div>
    )
}


export default Collection

{/* <section className="sent-message-container">
    {fetchThought.map(message => (
        <article key={message._id}>
            <p>{message.message}</p>
            <p>{formatDistance(new Date(message.createdAt), Date.now(), {
                addSuffix: true,
            })}</p>
        </article>
    ))}
</section> */}
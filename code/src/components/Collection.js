import React, { useEffect, useState } from 'react'

import API_URL from 'utils/Api'

import Message from 'components/Message'
import SentMessage from 'components/SentMessage'


const Collection = () => {

    const [fetchThought, setFetchThought] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const [loading, setLoading] = useState(false)

// FETCHING THOUGHTS

    useEffect(() => {
        fetchThoughts()
    }, [])

    const fetchThoughts = () => {
        setLoading(true)
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => setFetchThought(data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }

    

// SUBMITTING THOUGHT

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
            .then(data => fetchThoughts([data, ...newMessage]))
            .finally(() => setNewMessage(''))
    }

    const onNewMessageChange = (event) => {
        setNewMessage(event.target.value)
    }

    // WHEN CLICKING LIKE BUTTON

    const handleOnLikeChange = (likeID) => {

        const options = {
            method: 'POST',
        }

        fetch(`https://happy-thoughts-own-api.herokuapp.com/thoughts/${likeID}/like`, options)
            .then(res => res.json())
            .then(() => fetchThoughts())

    }


    return (
        <div>
            <Message
                loading={loading}
                onNewMessageChange={onNewMessageChange}
                onFormSubmit={onFormSubmit}
            />

            <SentMessage

                newMessage={newMessage}
                fetchThought={fetchThought}
                onLikeChange={handleOnLikeChange}
            />
        </div>
    )
}


export default Collection

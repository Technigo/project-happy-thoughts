import React, { useEffect, useState } from 'react'

import API_URL from 'utils/Api'

import Message from 'components/Message'
import SentMessage from 'components/SentMessage'


const Collection = () => {

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
            .then(data => setFetchThought([data, ...fetchThought]))
            .finally(() => setNewMessage(''))

    }

    const onNewMessageChange = (event) => {
        setNewMessage(event.target.value)
    }

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setFetchThought(data))
    }, [])

    const handleOnLikeChange = (likeID) => {
        const options = {
            method: 'POST',
            headers: {
                'Cotent-Type': 'application/json'
            },
        }

        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${likeID}/like`, options)
            .then((res) => res.json())
            .then(() => setNewMessage())


    }


    return (
        <div>
            <Message
                loading={loading}
                onNewMessageChange={onNewMessageChange}
                onFormSubmit={onFormSubmit} />

            <SentMessage
                newMessage={newMessage}
                fetchThought={fetchThought}
                onLikeChange={handleOnLikeChange}

            />
        </div>
    )
}


export default Collection

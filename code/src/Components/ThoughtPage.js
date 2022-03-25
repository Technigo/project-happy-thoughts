import React, { useState, useEffect } from 'react'
import { ThoughtsList } from 'Components/ThoughtsList'
import { ThoughtsForm } from 'Components/ThoughtsForm'

import { HAPPY_THOUGHTS_URL, LIKED_THOUGHTS_URL } from 'Fetch/API'

export const ThoughtPage = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)
    const [newMessages, setNewMessages] = useState('')


    useEffect(() => {
        fetchList()
    }, [])

    const fetchList = () => {
        setLoading(true)
        fetch(HAPPY_THOUGHTS_URL)
            .then((res) => res.json())
            .then((data) => setList(data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const options = {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: newMessages
            })
        }
        
        fetch(HAPPY_THOUGHTS_URL, options)
            .then((res) => res.json())
            .then((data) => {
                fetchList();
                setNewMessages('')
            })
    }

    const handleLikes = (thoughtId) => {
        const options = {
            method: 'POST',
        }
        
        fetch(LIKED_THOUGHTS_URL(thoughtId), options)
            .then((res) => res.json())
            .then(() => {
                fetchList()
            })
    }

    return (
        <div>
            {loading}
            <ThoughtsForm
                onFormSubmit={handleFormSubmit}
                newMessages={newMessages}
                setNewMessages={setNewMessages}
            />

            {list.map((thoughts) => (
                <ThoughtsList
                    key={thoughts._id}
                    thoughts={thoughts}
                    onLikes={handleLikes}
                />
            ))}
        </div>
    )
}

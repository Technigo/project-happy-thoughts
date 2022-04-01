import React, {useState, useEffect } from "react"

import Loader from "./Loader"
import HeartFall from "./HeartFall"
import { LIKES_API, THOUGHTS_API } from "./utils/urls"

import ThoughtsList from "./ThoughtsList"
import ThoughtForm from './ThoughtForm'
import Footer from "./Footer"


const Main = () => {
    const [thoughts, setThoughts] = useState([])
    const [newThought, setNewThought] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchThoughts()
       }, [])

    const fetchThoughts = () => {
    setLoading(true)
    fetch(THOUGHTS_API)
        .then(res => res.json())
        .then(data => setThoughts(data))
        .catch(error => console.error(error))  
        .finally(() => setLoading(false)) 
    }

    const handleNewThoughtChange = (event) => {
        setNewThought(event.target.value)
    }
    
    const handleFormSubmit = (event) => {
    event.preventDefault()

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: newThought
            })
        }

        fetch(THOUGHTS_API, options)
            .then(res => res.json())
            .then(data => fetchThoughts())
            .catch(error => console.error(error)) 
            .finally(() => setNewThought(""))
    }

    const likeMessage = (thoughtId) => {
        const options = {
            method: "POST",
        }

        fetch(LIKES_API(thoughtId), options)
            .then(res => res.json())
            .then(data => fetchThoughts())
            .catch(error => console.error(error))
    }

    return (
        <main className="thoughts-container">
           {loading && <Loader />}
           <HeartFall />
            <ThoughtForm 
            newThought={newThought} 
            onNewThoughtChange={handleNewThoughtChange} 
            onFormSubmit={handleFormSubmit}
            />
            <ThoughtsList 
            thoughts={thoughts}
            likeMessage={likeMessage}
            />
            <Footer />
        </main>
    )
}

export default Main
import React, { useState, useEffect } from "react"
import GetThoughts from "./GetThoughts"
import PostThoughts from "./PostThoughts"
// import {formatRelative } from 'date-fns'

const API_THOUGHTS = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
const API_LIKES = (thoughtId) =>
  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`


const HappyThougts = () => {
  /* GET THOUGHTS AND LIKES */
  const [thougts, setThougts] = useState([])

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_THOUGHTS)
      .then((response) => response.json())
      .then((json) => setThougts(json))
  }

  const postLike = (thoughtId) => {
    const option = { method: "POST" }

    fetch(API_LIKES(thoughtId), option)
      .then((response) => response.json())
      .then(() => fetchThoughts())
  }

  /* POST THOUGHTS */

  const [newThought, setNewThought] = useState("")

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    }

    fetch(API_THOUGHTS, option)
      .then((res) => res.json())
      .then(() => {
        fetchThoughts()
        setNewThought("")
      })
  }

  return (
    <div className="BoxContainer">
      <PostThoughts
        newThought={newThought}
        onFormSubmit={onFormSubmit}
        setNewThought={setNewThought}
        handleNewThoughtChange={handleNewThoughtChange}
        
      />

      <GetThoughts 
        thougts={thougts} 
        onPostLike={postLike} 
         
    />
    </div>
  )
}
export default HappyThougts

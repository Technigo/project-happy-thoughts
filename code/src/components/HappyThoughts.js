import React, { useState, useEffect } from "react"
import GetThoughts from "./GetThoughts"
import PostThoughts from "./PostThoughts"
// import {formatRelative } from 'date-fns'

const API_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
const LIKES_URL = (thoughtId) =>
  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`

const HappyThougts = () => {
  /* GET THOUGHTS AND LIKES */
  const [thougts, setThougts] = useState([])

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setThougts(json))
  }

  const postLike = (thoughtId) => {
    const option = { method: "POST" }

    fetch(LIKES_URL(thoughtId), option)
      .then((response) => response.json())
      .then((json) => fetchThoughts())
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

    fetch(API_URL, option)
      .then((res) => res.json())
      .then((data) => {
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
      />

      <GetThoughts thougts={thougts} onPostLike={postLike} />
    </div>
  )
}
export default HappyThougts

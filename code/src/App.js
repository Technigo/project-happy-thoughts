/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import ThoughtsFeed from 'components/ThoughtsFeed';
import Form from 'components/Form';
import Loader from 'components/Loader';
import { Pagination } from 'components/Pagination';

export const App = () => {
  // the clickcounter tend sometimes to be not a number, so this is to reset the counter
  // It then remains a number even if the page is refreshed
  if (localStorage.clickcount === 'NaN' || localStorage.clickcount === undefined) {
    localStorage.clickcount = 0
  }

  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [charactersCount, setCharactersCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [newPost, setNewPost] = useState(false)
  const [totalLikes, setTotalLikes] = useState(Number(localStorage.clickcount))

  const [currentPage, setCurrentPage] = useState(1)
  const [thoughtsPerPage] = useState(20)

  // get current posts
  const indexOfLastThought = currentPage * thoughtsPerPage
  const indexOfFirstThought = indexOfLastThought - thoughtsPerPage
  const currentThoughts = thoughts.slice(indexOfFirstThought, indexOfLastThought)

  console.log(currentThoughts)

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const fetchThoughts = async () => {
    setLoading(true)
    await fetch('https://project-happy-thoughts-api-dsxqivtt3a-lz.a.run.app/thoughts?page=1&perPage=100')
      .then((response) => response.json())
      .then((transformedData) => {
        setThoughts(transformedData.response)
      })
    setLoading(false)
  }

  useEffect(() => {
    fetchThoughts()
  }, [currentPage])

  const handleTotalLikesCallback = () => {
    setTotalLikes(totalLikes + 1)
    localStorage.clickcount = Number(localStorage.clickcount) + 1
  }
  // ----when writing a new thought---
  const handleNewThoughtChange = ((event) => {
    setNewThought(event.target.value)
    setCharactersCount(event.target.value.length)
  })

  // ----when posting a new thought---
  const handleSubmit = ((event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }
    fetch('https://project-happy-thoughts-api-dsxqivtt3a-lz.a.run.app/thoughts', options)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.status)
        }
        return response.json()
      })
      .then((lastThought) => {
        setThoughts((previousThoughts) => [lastThought.response, ...previousThoughts])
        // sets a temporary class for (to add a animation) a new thought/post
        setNewPost(true)
      })
      .catch((error) => {
        window.alert('Your message is too short or too long. Rephrase your thought and try again! 💭');
        console.error(error)
      })
      .finally(() => {
        setNewThought('')
        setCharactersCount(0)
        setTimeout(() => { setNewPost(false); }, 1000);
      });
  })

  if (loading) {
    return (
      <Loader />
    )
  }
  return (
    <div className="container">
      <div className="inner-container">
        <Form
          onFormSubmit={handleSubmit}
          onNewThought={newThought}
          onNewThoughtChange={handleNewThoughtChange}
          charactersCount={charactersCount} />
        {totalLikes === 1
          && <div className="like-counter">You have hearted {totalLikes} thought! 🖤 </div>}
        {totalLikes > 1 > 9
          && <div className="like-counter">You have hearted {totalLikes} thoughts! 🖤 </div>}
        {totalLikes > 10
          && <div className="like-counter">You have hearted {totalLikes} thoughts! 🖤 You are quite a lover! </div>}
        <ThoughtsFeed
          posted={newPost}
          list={currentThoughts}
          handleTotalLikesCallback={handleTotalLikesCallback} />
        <Pagination postsPerPage={thoughtsPerPage} totalPosts={thoughts.length} paginate={paginate} />
      </div>
    </div>
  );
}

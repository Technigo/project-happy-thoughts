import React, { useState, useEffect } from 'react';
import ThoughtsFeed from 'components/ThoughtsFeed';
import Form from 'components/Form';
import Loader from 'components/Loader';

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

  const fetchThoughts = () => {
    setLoading(true)
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
      .then((response) => response.json())
      .then((transformedData) => setThoughts(transformedData))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchThoughts();
  }, []);

  const handleTotalLikesCallback = () => {
    setTotalLikes(totalLikes + 1)
    localStorage.clickcount = Number(localStorage.clickcount) + 1
  }
  // -----POSTING A NEW THOUGHT----
  const handleNewThoughtChange = ((event) => {
    setNewThought(event.target.value)
    setCharactersCount(event.target.value.length)
  })

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
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
      .then((response) => response.json())
      .then((lastThought) => {
        if (lastThought.errors) {
          window.alert('Your message is too short or too long. Rephrase your thought and try again! 💭');
        } else {
          setThoughts((previousThoughts) => [lastThought, ...previousThoughts])
          setNewPost(true)
        }
      })
      .finally(() => {
        setNewThought('')
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
        {totalLikes !== 0
          && <div className="like-counter">You have hearted {totalLikes} thoughts! 🖤 </div>}
        <ThoughtsFeed
          posted={newPost}
          list={thoughts}
          handleTotalLikesCallback={handleTotalLikesCallback}
          fetchThoughts={fetchThoughts} />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Confetti from 'react-confetti';

const NewPost = () => {
  const [newPost, setNewPost] = useState('');
  const [confetti, setConfetti] = useState({ showConfetti: false })

  const HandleFormSubmit = (event) => {
    event.preventDefault();
    if (newPost.length < 5) {
      return alert('Oh no! Too short message, needs to be minimum 5 characters')
    } else if (newPost.length > 140) {
      return alert('Oh no! Too long message, keep it within 140 characters')
    } else {
      const Submit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newPost })
      };
      fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', Submit)
        .then((response) => response.json())
        .then(() => {
          setConfetti({ showConfetti: true })
          setNewPost('');
          setTimeout(() => window.location.reload(), 3000)
        })
    }
  };

  return (
    <>
      {confetti.showConfetti && <Confetti numberOfPieces={200} />}
      <div className="newPostWrapper">
        <h3 className="newPostTitle">What is making you happy right now?</h3>
        <form onSubmit={HandleFormSubmit}>
          <textarea
            id="newPost"
            type="text"
            placeholder="Type something here.."
            rows="4"
            value={newPost}
            onChange={(event) => setNewPost(event.target.value)} />
          <p className={newPost.length > 140 ? 'counterTooMany' : 'counter'}>{140 - newPost.length} / 140</p>
          <button className="postBtn" type="submit">
            <span>
              <span role="img" aria-label="heart">❤️ </span>
            Send happy thought
              <span role="img" aria-label="heart"> ❤️</span>
            </span>
          </button>
        </form>
      </div>
    </>
  )
};

export default NewPost;
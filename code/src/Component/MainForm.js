import React, { useState, useEffect } from 'react';
import ThoughtSubmitForm from 'Component/ThoughtSubmitForm';
import MessageList from 'Component/MessageList';
import { API_URL } from '../constants';
import '../Style/MainForm.css';

const MainForm = () => {
  const [thought, setThought] = useState("");
  const [thoughts, setThoughts] = useState([]);
  // const [likeNumber, setLikeNumber] = useState(0);

  useEffect(() => {
    fetch(API_URL)
    .then((res) => {
     return res.json();
    })
     .then((data) => {
     data.reverse();
     setThoughts(data);
    });
  }, []);

  const handleThoughtChange = (newThought) => {
    setThought(newThought);
  }

  const handleThoughtSubmit = () => {
    const body = JSON.stringify({ message: thought });

    fetch(API_URL, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body
      })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
        setThought("");
      })
    };

  return (
    <div>
      <div className="main-form">
        <section>
          <ThoughtSubmitForm
            thought={thought}
            onThoughtChange={handleThoughtChange}
            onSubmitThought={handleThoughtSubmit}
          />
        </section>
        <section>
          <MessageList 
            messages={thoughts}
          />
        </section>
      </div>
    </div>
  );
}
 
export default MainForm;
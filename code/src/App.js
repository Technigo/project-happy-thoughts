import React, {useEffect, useState}  from 'react';
import moment from 'moment';
import ThoughtForm from './components/ThoughtForm';
import {API_URL, LIKES_URL} from './utils/urls';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought,setNewThought] = useState('');

useEffect(() => {
  fetchThoughts()
}, []);

const fetchThoughts = () => {
  fetch(API_URL)
  .then((res) => res.json())
  .then((data) => setThoughts(data));
}

const handleFormSubmit = (event) => {
  event.preventDefault();

  const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: newThought })
  };

  fetch(API_URL, options)
  .then((res) => res.json())
  .then((data) => {
    fetchThoughts();
  });
  // setThoughts([data,...thoughts]));
};

const onLikesIncrease = (thoughtId) => {
 const options = {
   method: 'POST',
 };

 fetch(
   LIKES_URL(thoughtId),
  options
 )
 .then ((res) => res.json())
 .then ((data) => {
   //v1 increase likes only

  //  const  updatedThoughts = thoughts.map((item) => {
  //    if (item._id === data._id) {
  //      item.hearts += 1;
  //      return item;
  //    } else {
  //      return item;
  //    }
  //  });

  //  setThoughts(updatedThoughts);

  //v2
  fetchThoughts();

 });


 const thoughtsWithoutUpdatedThought = thoughts
};

  return (
    <div>
     <ThoughtForm onFormSubmit={handleFormSubmit} newThought={newThought} setNewThought ={setNewThought}/>

      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          <button onClick={() => onLikesIncrease(thought._id)}> &hearts; {thought.hearts}</button>
          <p className="date"> 
          - Created at: {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      ))}
    </div>
  );
};
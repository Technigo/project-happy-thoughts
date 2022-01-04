import React, { useState, useEffect } from 'react';

import { ThoughtCard } from 'components/ThoughtCard';


import { API_URL, LIKES_URL} from './utils/urls';

export const App = () => {
  //useState is like container, that contains a variable and a function
  //you can uppdate variable with function. This function exist somewhere in React and do update variable
  //if useState() is empty it gives undefined
  const [thoughts, setThoughts] = useState([]);
  /*new thought is the value from input*
  setNewThought function, sets value to the newThought*/
  const [newThought, setNewThought] = useState("");
  const [filteredArray, setFilter] = useState([]);
	const [username, setUsername] = useState();

  // useEffect is like reaction to componenet behavior 
  // it can be a couple of useEffect in one componenet, and you can apply useEffect to different fases of componenet live 
  useEffect(() => {
    getRequest()
  }, []);

  /* get request for fetchnig thoughts from backend, everytime this function calls it uppdates? */
  const getRequest = () => {
    fetch(API_URL)
      .then((res) => res.json())
      /*json is an array with 20 object in it, 
      here we passing json object to setMessage function. So now state is updated
      and message has a value of json object?
      saving data from json to thoughts*/
      .then((json) => {
				console.log(json)
         setThoughts(json);
         setFilter(json)
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought, username: username}),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then(() => {
        getRequest();
        setNewThought("");
      });
  };

  /* function to increase the mount of hearts, passing the id of thought as argument to this function*/
  const handleLikesIncrease = (thoughtId) => {
    /*options object that needed to POST messages*/
    const options = {
      method: 'POST',
    };
    /*fetch takes in two arguments, one of them is likes url which is variable from urls.js file that takes in an argument with thought id, 
    and second argument is options variable which is connected to backend */
    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      /*Sending request to backend*/ 
      .then(() => getRequest());
  };

  return (
     <>
      {/* Passing handleFormSubmit function and use state as props to form js */}
      {/*<Form 
        handleFormSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
      /> */}

			<form onSubmit={handleFormSubmit} className="form" >
				<h1 className="form-title" >What makes you happy? &hearts;</h1>
				<textarea 
					id="newThought"
					type="text" 
					maxLength="140"
					value={newThought}
					placeholder="Write your happy thought here"
					onChange={(e) => setNewThought(e.target.value)}
					/>
				<p style={{ color: newThought.length > 130 ? "red" : "green" }} >
					{newThought.length}/140
				</p>
				<label htmlFor="Name">Name 
				<input type="text" 
				value={username}
				onChange={(e) => setUsername(e.target.value)}/></label>
				<button 
					className="form-button"
					type="submit" 
					disabled={newThought.length < 5 || newThought.length > 140} >
							&hearts; Send &hearts;
				</button>
			</form>

      {/*<FilterButtons 
        handleOldestButton={handleOldestButton}
        handleNewestButton={handleNewestButton}
      />*/}

      {/* mapping filteredArray */ }
      {filteredArray.map((thought) => {
        return (
          <ThoughtCard 
          key={thought._id}
          thought={thought}
          onLikesIncrease={handleLikesIncrease}
        />
        );
      })};

     </>
  );
};

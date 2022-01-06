import React, { useEffect, useState } from "react";
import { API_URL, LIKES_URL } from "utils/urls";
import moment from "moment";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  /* const [heart, setHeart] = useState(""); */

  //fetching the API with the useEffect hook and sets the value to the state throw setThoughts
  useEffect(() => {
    fetchThoughts();
  }, []);
  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      //JSON.stringify is the package you need to let the code travel to the backend of the app, its like sending a package with post nord, you need to wrap the package before you send it.
    };
    //The POST request. Inside the the post request we need two arguments, the option variable above is just created because ti looked messy to have it inside of the fetch...
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]));
    //The three dots mean spread and it basically mean that you have two glasses you want to combine.
  };
  const handleLikesIncrease = (thoughtId) => {
    const options = {
      method: "POST",
    };

    fetch(LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        //v1 increase likes only
        const updatedThoughts = thoughts.map((item) => {
         if (item._id === data._id) {
            item.hearts += 1;
            return item;
          } else {
            return item;
          }
        });

        setThoughts(updatedThoughts); */

        //v2
        fetchThoughts();
      });
  }

  return (
    <>
      <header>
        <h1>Happy thoughts!</h1>
      </header>

      {/* Mounting the values from the API throw the state hooks value "thoughts" */}
      <div className="container">
        <form className="thoughts newThought" onSubmit={onFormSubmit}>
          <div className="form-container">
            <label htmlFor="newThought">
              <p>What's making you happy right now? </p>
            </label>
            <input
              id="newThought"
              type="text"
              value={newThought}
              onChange={(event) => setNewThought(event.target.value)}
            />
            <button className="send-button" type="submit">
              <p>
                <span role="img" aria-label="heart emoji">
                  {" "}
                  ❤️{" "}
                </span>{" "}
                Send happy Thought!{" "}
                <span role="img" aria-label="heart emoji">
                  {" "}
                  ❤️{" "}
                </span>
              </p>
            </button>
          </div>
        </form>

        {thoughts.map((thoughts) => (
          <div className="thoughts grid" key={thoughts._id}>
            <p className="message">{thoughts.message}</p>

            <div>
              <button
                className="heart"
                onClick={() => handleLikesIncrease(thoughts._id)}
              >
                <span role="img" aria-label="heart emoji">
                  ❤️
                </span>
              </button>
              x {thoughts.hearts}
            </div>
            <p className="date">{moment(thoughts.createdAt).fromNow()}</p>
          </div>
        ))}
      </div>
      <footer>
        <h1>
          Hedvig Mejstedt
          <span role="img" aria-label="lion emoji">
            🦁
          </span>
        </h1>
      </footer>
    </>
  );
};


/*_______________________________________________________________________*/

import React, { useEffect, useState } from "react";
import moment from "moment";

import { API_URL } from "./utils/urls";

export const App = () => {
  //keeps the list of thoughts
  const [thoughts, setThoughts] = useState([]);

  // keeps track of the thought we type in in the inputfield
  const [newThought, setNewThought] = useState("");
  // v.1
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }, []);
  //The empty array indicates when the esuEffect is updating.

  //v.2
  /*  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  }; */

  //POST request that is uploading the thought we are writing in the input field.
  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newThought }),
    };

    // v. 1
    //In this function we are sending the new information about the updated thoughts and likes to two places, to the backend and to update our local variable thoughts... this means that we are not seeing "in real time" if someone else is pressing like, or writing a comment, we only se that if we are updating the page. So instead of sending our information to two places, we can send it to the server and then trigger an update of the get request.
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        setThoughts([data, ...thoughts]);

        // v.2
        /* fetchThoughts(); */
      });
  };

  //Eftersom att detta är en post så måste vi göra en option function precis som vi gjorde med den förra post requesten. In order for the fetch to know that its going to be someting different than an ordenary fetch. we can make one more option const because they are in different scoopes. there are a convention to call this function "options", "requestOptions" or "setupOptions" or someting similar.

  //There are two differend kinds of POST requests, one where you send information in a body, to the API and one kind where you dont need to send info via a body, but where you instead use the POST API to include the info needed. Like in this request, we only need to include the URL with the thought-id. We only need to pass info about heart-klicking, not a sentence like with the input field.

  // Since we're not sending any information we dont need a header either...
  const onLikesIncrease = (thougtId) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thougtId}/like`,
      options
    )
      //this .then .then are making something with the responses from the backend. so when we are console.loging the response from the fetch we can se that the heart increase is working because we se in the console how many hearts the current thougt have. Ant then when we are refreshing the page, we can se that the amount of likes has increased. To make the new amount of hearts appear directly we can have two different approaches.

      // 1. inject the new amount of hearts in the thoughts object, but then we first have to delet the current amount. (thats a bit tricky).
      // 2. open the list of thoughts and look for one specific thought - the one we just updated and increas the amount of hearts with one. (thats the quicker approach). in Map we always need to return the updated item.
      .then((response) => response.json())
      .then((data) => {
        const updatedThoughts = thoughts.map((item) => {
          if (item._id === data._id) {
            item.hearts += 1;
            return item;
          } else {
            return item;
          }
        });
        setThoughts(updatedThoughts);
      });
  };

  return (
    //JS6 part
    <div>
      {/* Form where we are able to type in tha thought we want to post to the
      site. (and to the API) */}
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">Type your thought</label>
        <input
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => setNewThought(e.target.value)}
        />
        <button type="submit">Send thought!</button>
      </form>
      {/* This code is responsible for showing all the thoughts in the API,
      thanks to the iteration in the .map function. */}
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
          {/*  If you need to pas in a costum argument on an onClick, onChange on
          any event function... you need to pass a function declaration (arrey
          function, kunde inte skriva ut den utan att koden fuckade upp allt
          runt om...) utan the arrey function innann kommer funktionen att köras
          när application is rendered, men att ha funktionen innan så kommer
          appen att vänta på att vi klickar på knappen. */}
          <button onClick={() => onLikesIncrease(thought._id)}>
            {" "}
            &hearts; {thought.hearts}
          </button>
          <p className="date">
            - Created at: {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      ))}
    </div>
  );
};

// Pseudo code (when we think about what we need to do without building with any code)
// send a request to the API saying, hey, there is one specific thought that i want to increse the amount of hearts around.
// we need to find one specific thought. 99.9% of this times you will look for an id. in this case we are using the URL:  `POST https://happy-thoughts-technigo.herokuapp.com/thoughts/THOUGHT_ID/like` and we are going to make it dynamic through replacing the: "THOUGHT_ID" part with ${}

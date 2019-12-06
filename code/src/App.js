import React from "react";
import { NewPost } from "NewPost";
import { ThoughtsList } from "ThoughtsList";

export const App = () => {
  // const [thoughts, setThoughts] = useState([]);
  // // const [newThought, setNewThought] = useState("");

  // useEffect(() => {
  //   fetch("https://technigo-thoughts.herokuapp.com/")
  //     .then(res => res.json())
  //     .then(json => setThoughts(json));
  // }, []);

  // const handleFormSubmit = event => {
  //   event.preventDefault();

  //   // Send the POST request with the input from your form (instead
  //   // of 'Hello world' like this example does):
  //   fetch("https://technigo-thoughts.herokuapp.com/", {
  //     method: "POST",
  //     body: JSON.stringify({ message: newThought }),
  //     headers: { "Content-Type": "application/json" }
  //   })
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error("Wrong response code");
  //       }
  //       return res.json();
  //     })
  //     .then(createdThought => {
  //       // Now you have `newThought` which is the response from the
  //       // API as documented at the top of this readme. You can use
  //       // it to update the `thoughts` array:
  //       setThoughts(previousThoughts => [createdThought, ...previousThoughts]);
  //     })
  //     .catch(console.error);
  // };

  return (
    <>
      <NewPost />
      <ThoughtsList />

      {/* <form>
        <section className="post-wrapper">
          <div className="new-post">
            <h2>What's making you happy right now?</h2>
            <label>
              <textarea
                rows="3"
                columns="1"
                onChange={event => setNewThought(event.target.value)}
                value={newThought}
              />
            </label>
            <button
              type="submit"
              className="submit-button"
              onClick={handleFormSubmit}
            >
              <span role="img" aria-label="heart">
                ❤️ Send Happy Thought ❤️
              </span>
            </button>
          </div>
        </section>
      </form> */}
      {/* {thoughts.map(thought => (
        <div className="card" key={thought._id}>
          <h2>{thought.message}</h2>
          <div className="card-bottom">
            <button type="button" className="like-button">
              ❤️
            </button>
            <p>x {thought.hearts}</p>
            <div className="time">
              <p>{moment(thought.createdAt).fromNow()}</p>
            </div>
          </div>
        </div>
      ))} */}
    </>
  );
};

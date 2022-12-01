import React, { useState, useEffect } from "react";
import "./App.css";
import TextList from "./components/TextList/TextList";
import TaskForm from "./components/TaskFrom/TaskForm";

const App = () => {
  const [textList, setTextList] = useState([]);
  const [newText, setNewText] = useState("");
  const [loading, setLoading] = useState(false);

  /*
   - This function fetches 20 objects ('thoughts') from the HappyThoughts API.
   - Adding useEffect to imports from React in App.js, Whenever App.js mounted/unmounted, the useEffect hook below.
  */

  const fetchData = () => {
    setLoading(true);
    /* execute a fetch to from the URL & convert to JSON()*/
    // fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
    fetch("https://api-happy-tweets.herokuapp.com/thoughts")
      .then((res) => res.json())
      .then((data) => setTextList(data.response))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
    /* set the loading variable to false when everything went well*/
  };
  useEffect(() => {
    fetchData();
  }, []);

  /*
  - Create different props to use in different components
  - When the user enters  a new text in the textarea field in TaskForm.js will be set as NewText
  */
  const newTextChange = (e) => {
    console.log("handleNewTextChange invoked");
    setNewText(e.target.value);
    console.log(newTextChange);
  };

  /**
   -clears setNewText to an empty string again
   */
  const handleNewText = () => {
    setNewText("");
    setLoading(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    /*
    -This function posts the newThought
    */
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: newText,
      }),
    };

    // fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts", options)
    fetch("https://api-happy-tweets.herokuapp.com/thoughts", options)
      .then((res) => res.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => handleNewText(""));
  };

  /*
  -This function is invoked on clicking a heart button.
   */

  const handleLikeSubmit = (id) => {
    console.log("ID is a ", id);

    const likeSubmit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      // `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`,
      `https://api-happy-tweets.herokuapp.com/thoughts/${id}/like`,
      likeSubmit
    )
      .then((res) => res.json())
      .then((data) => fetchData(data._id));
  };

  if (loading) {
    return <p>The page is loading ...</p>;
  }

  return (
    <div className="App">
      <TaskForm
        newText={newText}
        handleFormSubmit={handleFormSubmit}
        newTextChange={newTextChange}
      />
      <TextList list={textList} onNewLikeSubmit={handleLikeSubmit} loading={loading} />
    </div>
  );
};

export default App;

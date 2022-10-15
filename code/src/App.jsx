import React, { useState, useEffect } from "react";
import "./App.css";
import TextList from "./components/TextList/TextList";
import TaskForm from "./components/TaskFrom/TaskForm";

const App = () => {
  const [textList, setTextList] = useState([]);
  const [newText, setNewText] = useState("");
  const [loading, setLoading] = useState(false);

  //  console.log(textList);

  // Adding useEffect to imports from React in App.js
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    // execute a fetch to from the URL & convert to JSON()

    fetch("https://week7-backend.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTextList(data.reverse()))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
    // set the loading variable to false when everything went well
  };

  //Create different props to use in different components
  const newTextChange = (e) => {
    setNewText(e.target.value);
  };

  const handleFormClean = () => {
    setNewText("");
    setLoading(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: newText,
      }),
    };

    fetch("https://week7-backend.herokuapp.com/tasks", options)
      .then((res) => res.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => handleFormClean());
     
  };
  if (loading) {
    return <p>The page is loading ...</p>;
  }

  return (
    <div className="App">
      <TaskForm
        handleFormSubmit={handleFormSubmit}
        newTextChange={newTextChange}
        newText={newText}
      />
      <TextList list={textList} 
      // setTextList={setTextList}
      />
    
    </div>
  );
};

export default App;

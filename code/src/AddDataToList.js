import React, { useState, useEffect } from "react";
import ListThought from "ListThought";
import CreateThought from "CreateThought";
import Loading from "Loading";

const API = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
const API_LIKE = (thoughtId) =>
  `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`;

const AddDataToList = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  /* Fetch data */

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = () => {
    setLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  };

  /*  onClick event from message-box "Create" */

  const handleSubmitMessages = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: message })
    };

    fetch(API, options)
      .then((res) => res.json())
      .then((data) => {
        fetchdata();
        setMessage("");
      });
  };

  /*   onClick event from like button "List" */

  const handleLikes = (thoughtId) => {
    const options = {
      method: "POST"
    };

    fetch(API_LIKE(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchdata();
      });
  };

  /* Return Info from create and List */

  return (
    <div className="ContainerData">
      <CreateThought
        handleSubmitMessages={handleSubmitMessages}
        message={message}
        setMessage={setMessage}
      />

      <div>{loading && <Loading />}</div>

      {posts.map((post) => (
        <ListThought key={post._id} post={post} handleLikes={handleLikes} />
      ))}
    </div>
  );
};

export default AddDataToList;

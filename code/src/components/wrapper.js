import React, { useEffect, useState } from "react";

import Thoughts from "./thoughts";
import Form from "./form";
import Loading from "./loader";

import { API_URL, LIKES_URL } from "utils/urls";

const Wrapper = () => {
const [thoughts, setThoughts] = useState([]);
const [newThought, setNewThought] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {
    fetchThoughts();
}, []);

const fetchThoughts = () => {
    setLoading(true);
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => setThoughts(data))
    .finally(() => setLoading(false));
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: newThought }),
    };
    fetch(API_URL, options)
    .then((res) => res.json())
    .then((data) => {
        fetchThoughts();
        setNewThought("");
    });
};
const handleLikesIncrease = (thoughtId) => {
    const options = {
    method: "POST",
    };

    fetch(LIKES_URL(thoughtId), options)
    .then((res) => res.json())
    .then((data) => {
        fetchThoughts();
    });
};

return (
    <div>
    {loading && <Loading />}

    <Form
        formSubmit={handleFormSubmit}
        newThought={newThought}
        setNewThought={setNewThought}
    />
    {thoughts.map((thought) => (
        <Thoughts
        key={thought._id}
        thought={thought}
        onLikesIncrease={handleLikesIncrease}
        />
    ))}
    </div>
);
};

export default Wrapper;
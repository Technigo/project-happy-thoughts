import React, { useEffect, useState } from "react";
import Header from "components/Header";
import ThoughtList from "components/ThoughtList";
import ThoughtInput from "components/ThoughtInput";
import Button from "components/Button";
import Heart from "components/Heart";

const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
const LIKES_URL =
  "https://happy-thoughts-technigo.herokuapp.com/thoughts/{Id}/like";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  // const [thought, setThought] = useState("");

  const fetchThoughts = () => {
    fetch(THOUGHTS_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <section className="main">
      <Header />
      <ThoughtList />
    </section>
  );
};

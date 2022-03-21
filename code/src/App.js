import React, { useEffect, useState } from "react";

import ThoughtForm from "Components/ThoughtForm";
import ThoughtItem from "Components/ThoughtItem";

import { API_URL, URL_LIKES } from "utils/urls";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);

  useEffect(() => {
    fetchThoughts();
  }, []);

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data));
  };
};

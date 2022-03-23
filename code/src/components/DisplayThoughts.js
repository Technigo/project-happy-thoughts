import React, { useEffect, useState } from "react";

const DisplayThoughts = () => {
  const [thoughts, setThoughts] = useState([]);


  useEffect(() => {
    fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
    .then((res) => res.json())
    .then((data) => setThoughts(data))
  }, []);

  const allThoughts = thoughts.map((thought) => {
    return <div className="thought">{thought.message}</div>;
  });

  return (
    <section className="all-thoughts">
      <div className="thought-wrapper">{allThoughts}</div>
    </section>
  );
};

export default DisplayThoughts;
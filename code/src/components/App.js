import React, { useState, useEffect } from "react";
import { SendThought } from "./SendThought";
import { DisplayThought } from "./DisplayThought";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [theme, setTheme] = useState("❤️");

  useEffect(() => {
    fetch(`https://perssons-happy-thoughts.herokuapp.com/thoughts?page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setTotalPages(json.pages);
        setThoughts(json.thoughts);
        setLoading(false);
      });
  }, [page]);

  return (
    <section className="all-thoughts-container">
      <h1>HAPPY</h1>
      <h1>
        TH
        <span className="title-emoji" role="img" aria-label="Red heart">
          ❤️
        </span>
        UGHTS
      </h1>

      <SendThought
        thoughts={thoughts}
        setThoughts={setThoughts}
        theme={theme}
        setTheme={setTheme}
      />
      {loading && <div className="spinning-loader" />}
      {!loading && (
        <div className="pages-back-forth">
          <button
            disabled={page === 1 ? true : false}
            className="pages-back-forth-btn"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            {"<"}
          </button>
          {page} / {totalPages}
          <button
            disabled={page === totalPages ? true : false}
            className="pages-back-forth-btn"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            {">"}
          </button>
        </div>
      )}
      {thoughts.map((thought) => (
        <DisplayThought
          key={thought._id}
          id={thought._id}
          message={thought.message}
          name={thought.name}
          hearts={thought.hearts}
          theme={thought.theme}
          date={thought.createdAt}
        />
      ))}
      {!loading && (
        <div className="pages-back-forth">
          <button
            disabled={page === 1 ? true : false}
            className="pages-back-forth-btn"
            onClick={() => {
              setPage(page - 1);
            }}
          >
            {"<"}
          </button>
          {page} / {totalPages}
          <button
            disabled={page === totalPages ? true : false}
            className="pages-back-forth-btn"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            {">"}
          </button>
        </div>
      )}
    </section>
  );
};

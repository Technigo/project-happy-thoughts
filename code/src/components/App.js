import React, { useState, useEffect } from "react";
import { SendThought } from "./SendThought";
import { DisplayThought } from "./DisplayThought";
import { Sort } from "./Sort";
import { ButtonsBackAndForth } from "./ButtonsBackAndForth";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("default");
  const [theme, setTheme] = useState("❤️");

  useEffect(() => {
    fetch(
      `https://perssons-happy-thoughts.herokuapp.com/thoughts?page=${page}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((json) => {
        setTotalPages(json.pages);
        setThoughts(json.thoughts);
        setLoading(false);
      });
  }, [page, sort]);

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
        setPage={setPage}
      />
      {loading && <div className="spinning-loader" />}
      {!loading && <Sort onChange={(e) => setSort(e.target.value)} />}
      {!loading && (
        <ButtonsBackAndForth
          page={page}
          totalPages={totalPages}
          disabledBack={page === 1 ? true : false}
          disabledForth={page === totalPages ? true : false}
          onClickBack={() => {
            setPage(page - 1);
          }}
          onClickForth={() => {
            setPage(page + 1);
          }}
        />
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
        <ButtonsBackAndForth
          page={page}
          totalPages={totalPages}
          disabledBack={page === 1 ? true : false}
          disabledForth={page === totalPages ? true : false}
          onClickBack={() => {
            setPage(page - 1);
          }}
          onClickForth={() => {
            setPage(page + 1);
          }}
        />
      )}
    </section>
  );
};

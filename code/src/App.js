/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from "react";
import Form from "components/Form";
import List from "components/List";

const baseURL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";

async function httpRequest(url, options) {
  const requestOptions = {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${baseURL}${url}`, requestOptions);
  const result = await response.json();
  return result;
}

export const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeoutId, setTimeoutId] = useState(undefined);
  const fetchThoughts = () => {
    setLoading(true);
    const timeout = setTimeout(() => {
      httpRequest("", { method: "GET" })
        .then((data) => {
          console.log("fetch");
          const sorted = data.sort((a, b) => {
            const curr = new Date(a.createdAt).getTime();
            const next = new Date(b.createdAt).getTime();
            return next - curr;
          });
          setList(sorted);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }, 200);
    setTimeoutId(timeout);
  };
  useEffect(() => {
    fetchThoughts();
    return () => timeoutId && clearTimeout(timeoutId);
  }, []);

  const handleFormSubmit = (message) => {
    httpRequest("", { method: "POST", body: JSON.stringify({ message }) });
    fetchThoughts();
  };
  const handleOnLike = (id) => {
    httpRequest(`/${id}/like`, { method: "POST" });
    fetchThoughts();
  };
  return (
    <main className="main">
      {loading && <div className="loading">Loading...</div>}
      <Form handleFormSubmit={handleFormSubmit} />
      <List list={list} handleOnLike={handleOnLike} />
    </main>
  );
};

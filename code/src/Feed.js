/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { SendThoughtForm } from 'SendThoughtForm';
import { Thought } from 'Thought';
import { Header } from 'Header';

export const Feed = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [myLikesCount, setMyLikesCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState('');
  const APIBaseURL = 'http://localhost:8080/thoughts'

  const fetchThoughts = () => {
    fetch(`${APIBaseURL}?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setThoughtsList(data.body.thoughtsList);
        setCurrentPage(data.body.currentPage);
        setTotalPages(data.body.totalPages);
      })
      .catch((error) => console.log(error))
      .finally(() => { setIsLoading(false) })
  }

  useEffect(() => {
    setIsLoading(true);
    fetchThoughts();
  }, [currentPage]);

  const onPreviousPageClick = () => {
    setCurrentPage(parseInt(currentPage, 10) - 1);
  };

  const onNextPageClick = () => {
    setCurrentPage(parseInt(currentPage, 10) + 1);
  };

  const handleLikeSubmit = (thoughtID) => {
    fetch(`${APIBaseURL}/${thoughtID}/like`, {
      method: 'PATCH'
    })
      .then(() => setMyLikesCount(myLikesCount + 1))
      .then(() => fetchThoughts())
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <Header myLikesCount={myLikesCount} />
      <SendThoughtForm
        apiBaseUrl={APIBaseURL}
        fetchThoughts={fetchThoughts} />

      <div className="page-buttons-wrapper">
        <p>Page {currentPage} of {totalPages}</p>
        <div>
          <button className="page-button" type="button" onClick={onPreviousPageClick} disabled={currentPage === 1}>Prev</button>
          <button className="page-button" type="button" onClick={onNextPageClick} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>

      {!isLoading && thoughtsList.map((thought) => {
        return (
          <Thought
            key={thought._id}
            thoughtMessage={thought.message}
            timeStamp={thought.createdAt}
            handleLikeSubmit={() => handleLikeSubmit(thought._id)}
            likesCounter={thought.hearts}
            username={thought.username}
            tag={thought.tag} />
        )
      })}
      {isLoading && (<h2>Loading happy thoughts...</h2>)}
    </div>
  );
}

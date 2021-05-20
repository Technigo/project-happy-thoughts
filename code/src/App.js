import React, { useState, useEffect } from 'react';

import { API_URL, LIKES_URL } from './reusables/urls';
import { FormInput } from './components/FormInput';
import { MessageList } from './components/MessageList';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Animation } from './components/Animation';
import { MainContainer } from 'components/Styling';

export const App = () => {
  const [newMessage, setNewMessage] = useState('');
  const [newName, setNewName] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimation] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    fetchAllMessages();
  }, [sort, page]);

  // Fetching all the thoughts
  const fetchAllMessages = () => {
    fetch(`${API_URL}?sort=${sort}&page=${page}`)
      .then(res => res.json())
      .then(messages => {
        setMessageList(messages.allThoughts);
        setLoading(false);
        setAnimation(false);
        setTotalPages(messages.pagesTotal);
      })
    .catch(err => alert(`Error: ${err}`));  
  };

  // Clicking the submit button, posting message
  const handleMessageSubmit = (e) => {
    e.preventDefault();

    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ message: newMessage, name: newName }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then((message) => {
      // If error -> set loading spinner, error function and then fetch messages
      if (message.errors) {
        setLoading(true);
        handleErrors(message);  
        fetchAllMessages();
      } else {
          // No error -> set animation instead of loading spinner, reset textarea and error message and delay fetching so animation can play out :)
          setLoading(false);
          setAnimation(true);
          setNewMessage('');
          setNewName('');
          setErrorMessage('');
          setTimeout(() => fetchAllMessages(), 1500);
        }
    })  
    .catch(err => alert(`Error: ${err}`));
  };

  // Function for setting error message
  const handleErrors = (error) => {
    const errorType = error.errors.message.kind;
    if (errorType === 'required') {
      setErrorMessage('You can not send an empty thought!');
    } else if (errorType === 'minlength') {
      setErrorMessage('Too short! You need a minimum of 5 characters');
    } else if (errorType === 'maxlength') {
      setErrorMessage('Too long! You can have max 140 characters');
    } else {
      setErrorMessage(error.message);
    }
  };

  // Fetching likes
  const handleLikeClick = (id) => {
    fetch(LIKES_URL(id), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(() => fetchAllMessages())
    .catch(err => alert(`Error: ${err}`));
  };

  // Function for pagination
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <MainContainer>
      <FormInput 
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        newName={newName}
        setNewName={setNewName}
        onMessageSubmit={handleMessageSubmit}
        errorMessage={errorMessage} />
      { animate && <Animation /> }
      { loading && <LoadingSpinner /> }
      <MessageList
        handleNewest={() => setSort('newest')}
        handleOldest={() => setSort('oldest')}
        handleLiked={() => setSort('hearts')}
        pageCount={totalPages} 
        page={page} 
        handlePageChange={handlePageChange}
        messageList={messageList}
        handleLikeClick={handleLikeClick} />
    </MainContainer>
  )
};


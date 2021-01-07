import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import Loader from './components/Loader';
import Sort from './components/Sort';
import { MESSAGES_URL } from './urls';

import './components/Styles.scss';

export const App = () => {
  const [messages, setMessages] = useState([]);
  const [totalMessages, setTotalMessages] = useState();
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('newest');

  useEffect(() => {
    fetchMessages();
    //eslint-disable-next-line
  }, [page, sort]);

  //fetch GET messages from the API, set messages and catch errors
  const fetchMessages = () => {
    fetch(`${MESSAGES_URL}?page=${page}&sort=${sort}`)
      .then(results => results.json())
      .then(data => {
        console.log(data);
        setMessages(data.results);
        setTotalMessages(data.total);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };

  console.log(`page: ${page}`);
  console.log(`number of messages: ${messages.length}`);
  console.log(`sorting: ${sort}`);
  console.log(totalMessages);

  //fetch POST message to the API and then fetch GET all messages
  const postMessage = (message, name) => {
    fetch(MESSAGES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, name }),
    })
      .then(() => fetchMessages())
      .catch(error => console.error(error));
  };

  //fetch POST like to the API's other endpoint and then fetch GET all messages
  const postLike = id => {
    fetch(`${MESSAGES_URL}/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => fetchMessages())
      .catch(error => console.error(error));
  };

  return (
    <main className="App App__grid">
      <MessageInput onMessageChange={postMessage} />
      {isLoading ? (
        <Loader className="Loader" />
      ) : (
        <>
          <Sort onClick={event => setSort(event.target.value)} />
          <InfiniteScroll
            dataLength={messages.length}
            next={() => setPage(page + 1)}
            hasMore={messages.length < totalMessages ? true : false}
            scrollThreshold={1}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more thoughts to show</p>}
          >
            <MessageList messageList={messages} onLikeChange={postLike} />
          </InfiniteScroll>
        </>
      )}
    </main>
  );
};

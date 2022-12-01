import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import NewThought from 'components/NewThought';
import ThoughtList from 'components/ThoughtList';

export const App = () => {
  const [thoughtList, setThoughtList] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    // fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    fetch('https://project-happy-thoughts-api-kjtbrarzja-uc.a.run.app/thoughts')
      .then((data) => data.json())
      .then((transformedData) => setThoughtList(transformedData))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  // will trigger first when app starts, and every time the variable in the dependency array changes

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  const handleFormCleanup = () => {
    setNewThought('');
    setLoading(false);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'post',
      body: JSON.stringify({
        message: newThought
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    setLoading(true);
    // fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
    fetch('https://project-happy-thoughts-api-kjtbrarzja-uc.a.run.app/thoughts', options)
      .then((data) => data.json())
      .then(() => fetchData())
      .catch((error) => console.error(error))
      .finally(() => handleFormCleanup());
  }
  if (loading) {
    return (
      <p>THE PAGE IS LOADING...</p>
    )
  }
  const onLikesIncrease = (thoughtId) => {
    const options = {
      method: 'patch',
      headers: {
        'content-type': 'application/json'
      }
    };
    // fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, options)
    fetch(`https://project-happy-thoughts-api-kjtbrarzja-uc.a.run.app/thoughts/${thoughtId}/like`, options)
      .then((res) => res.json())
      .then((data) => {
        const updatedThoughts = thoughtList.map((item) => {
          // eslint-disable-next-line no-underscore-dangle
          if (item._id === data._id) {
            item.hearts += 1;
            return item;
          } else {
            return item;
          }
        });
        setThoughtList(updatedThoughts);
      });
  };
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <Header />
        <NewThought
          handleFormSubmit={handleFormSubmit}
          onNewThoughtChange={onNewThoughtChange}
          newThought={newThought} />
        <ThoughtList
          thoughtList={thoughtList}
          setThoughtList={setThoughtList}
          onLikesIncrease={onLikesIncrease} />
      </div>
    </div>
  );
}
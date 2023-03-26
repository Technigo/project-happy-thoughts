/* eslint-disable no-underscore-dangle */

import React, { useState, useEffect } from 'react';
import ThoughtCard from 'components/ThoughtCard';
import SubmitForm from 'components/SubmitForm';
import Footer from 'components/Footer';
import Loader from 'Loader';

// *************** MAIN APP ***************  //

// The function starts with declaring,
// the variables and sets the useState value.

const Parent = () => {
  const [latestMessage, setLatestMessage] = useState(null)
  const [thoughtsList, setThoughtsList] = useState([]);
  const [sendThought, setSendThought] = useState('');
  const [loading, setLoading] = useState(false);

  // Here we are calling the API and gets the JSON.
  // The setLoading true shows "loading text" if the API call is delayed.
  // .catch is catching eventual errors and displays them in a consol.log

  const fetchThoughts = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setThoughtsList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  // This is an React hook called useEffect. It executes the fetchThoughts function.
  // This function only runs first time the its mounted.

  useEffect(() => {
    fetchThoughts(); // <--- This is a callback function. Its executed on every render of the page
  }, []); // <--- This is the dependency array. When you put something(variables) in here
  //  it executs everytime the array change. But when its empty its only called when mounted.

  const onHeartButtonClick = (_id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`, options)
      .then((response) => response.json())
      .then(() => fetchThoughts())
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        console.log('new heart');
      });
  }

  const submitThought = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify({
        message: `${sendThought}`
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((data) => {
        setThoughtsList([data, ...thoughtsList])
        setLatestMessage(data._id)
      })
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false); setSendThought('') });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    submitThought();
  }

  // *************** MAIN APP RETURNS JXS ***************  //

  // The return displays two components inside a <div> ThoughtsForm & ThoughtsFlow
  // The ThoughtForm component is passed 3 props that handle the form submission of new "thoughts"
  // The ThoughtsFlow component is passed 2 props loading and thoughts.

  return (
    <div className="whole-webpage">
      {loading && <div className="loader-container"><Loader /></div>}
      <div className={`content-container ${loading ? '' : 'visible'}`}>
        <SubmitForm
          sendThought={sendThought}
          setSendThought={setSendThought}
          onSubmit={onSubmit} />
        <ThoughtCard
          onHeartButtonClick={onHeartButtonClick}
          thoughtsList={thoughtsList}
          latestMessage={latestMessage}
          loading={loading} />
        <Footer />
      </div>
    </div>
  );
}

export default Parent;


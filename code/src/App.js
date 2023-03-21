import React, { useState, useEffect } from 'react';

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [loading, setLoading] = useState(false)
  
  const fetchMessages = () => {
    setLoading(true);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((res) => res.json())
      .then((data) => setMessageList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchMessages();
  }, [])
  return (
    <div>
    </div>
  );
}

/* npm install --save date-fns */

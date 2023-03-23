import React, { useState } from 'react';
import Footer from 'components/Footer';
import InputBox from 'components/InputBox';
import ThoughtBox from 'components/ThoughtBox';

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0)

  const fetchThoughts = () => {
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setThoughts(data))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }
  return (
    <div>
      <InputBox fetchThoughts={fetchThoughts} clickCount={clickCount} />
      <ThoughtBox
        thoughts={thoughts}
        setThoughts={setThoughts}
        loading={loading}
        setLoading={setLoading}
        fetchThoughts={fetchThoughts}
        clickCount={clickCount}
        setClickCount={setClickCount} />
      <Footer />
    </div>
  );
}

import React, { useEffect } from 'react';

const InputForm = ({
  loading,
  setLoading,
  newThought,
  setNewThought,
  setHappyThoughtsList,
  happyThoughtsList,
  charCount,
  setCharCount
}) => {
  const updateThoughtsList = () => {
    setLoading(true);

    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
      .then((response) => response.json())
      .then((data) => setHappyThoughtsList(data))
      .catch((error) => console.log(error))
      .finally(() => {
        console.log('it worked');
        setLoading(false);
        console.log('loading-Get');
        console.log(happyThoughtsList);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    };

    console.log('options', options);
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then((data) => {
        setHappyThoughtsList([data, ...happyThoughtsList]);
        console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
        console.log(happyThoughtsList)
        setNewThought(''); // clear textarea
        setCharCount(140);
      });
  };

  useEffect(() => {
    updateThoughtsList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNewThought(value);
    setCharCount(140 - value.length); // update character count
  };

  if (loading) {
    return (<h2>loading in process...</h2>);
  }

  return (
    <div className="inputForm">
      <form onSubmit={handleFormSubmit}>
        <h3>What&apos;s making you happy right now?</h3>
        <textarea
          value={newThought}
          onChange={handleInputChange}
          maxLength="140" />
        <div id="counter">140/{charCount}</div>
        <button type="submit"><span id="heart"> Send Happy Thought&nbsp;</span></button>
      </form>
    </div>
  );
};

export default InputForm;

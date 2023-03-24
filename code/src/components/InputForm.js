import React, { useEffect } from 'react';

const InputForm = ({
  loading,
  setLoading,
  newThought,
  setNewThought,
  setHappyThoughtsList,
  happyThoughtsList
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
      });
  };

  useEffect(() => {
    updateThoughtsList();
  }, []);

  if (loading) {
    return (<h2>loading in process...</h2>);
  }

  return (
    <div className="inputForm">
      <form onSubmit={handleFormSubmit}>
        <h3>Submit thought below</h3>
        <textarea value={newThought} onChange={(event) => setNewThought(event.target.value)} />
        <button type="submit">❤ Send Happy Thought ❤</button>
      </form>
    </div>
  );
};

export default InputForm;

// Exported helpers functions to not clutter up components

export const CollectThoughts = (setLoading, setHappyThoughts) => {
  setLoading(true);
  fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts')
    .then((res) => res.json())
    .then((data) => setHappyThoughts(data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
};

export const HandleLikeButtonClick = (id, setLikes) => {
  // posts a new like to the like endpoint for the current thought
  fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: ''
  })
    // then receives an updated thought
    .then((res) => res.json())
    // re-renders that thought by setting new state
    .then((updatedThought) => {
      setLikes(updatedThought.hearts);
    })
    .catch((error) => console.error(error));
};

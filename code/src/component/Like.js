import React from 'react';


export const Likes = props => {

  // const LIKE_URL = "https:happy-thoughts-technigo.herokuapp.com/thoughts/${}/like;

  // const handleLikes = () => {

  //   fetch(LIKE_URL,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: ''

  //     }).then(() => {

  //     });
  // };


  return (
    <form >
      <input
        type="submit"
        className='heart-button'
        value='❤️'
      />
    </form>

  );
};


// onClick={handleLikes} 
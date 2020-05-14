import React, { useState } from 'react'
import './hearts.css'

const Hearts = ({ heart, _id }) => {
  const [hearts, setHearts] = useState(heart)

  const likeClickHandler = () => {

    fetch(`https://happyclappy.herokuapp.com/${_id}/like`, {
      method: 'POST', headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then((res) => res.json())
      .then(() => {
        setHearts((heart) => heart + 1);
      }, []);

  }


  return (
    <section className="heart-section">
      <button type="button" className={(hearts > 0 ? 'hearted' : 'nothearted')} onClick={likeClickHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" alt="heart" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
        </svg>
      </button>
      <p>x {hearts} </p>
    </section>
  )
}

export default Hearts
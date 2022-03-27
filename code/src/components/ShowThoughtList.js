import React from 'react'
import { add, formatRelative } from 'date-fns'

const ShowThoughtList = ({ thoughtList }) => {

  const addLikeOnHeartClick = (id) => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return (
    <section>
      {thoughtList &&
        thoughtList.map(singleThought => (
          <div key={singleThought._id}>
            <h4>{singleThought.message}</h4>
            <span>
              <button onClick={()=>addLikeOnHeartClick(singleThought._id)}>
                ❤️
              </button>
              x {singleThought.hearts}</span>

            <p>{singleThought.createdAt}</p>

          </div>
        ))

      }
    </section>
  )
}

export default ShowThoughtList;
import React from "react"
import { formatDistanceToNow } from 'date-fns';


const GetThoughts = ({ thougts, onPostLike }) => {
  return (
    <>
      {thougts.map((data) => (
        <div className="thoughts" key={data._id}>
          <p>{data.message}</p>
          <div className="likes">
            <button
              className="heartbutton"
              onClick={() => onPostLike(data._id)}
            >
              <span role="img" aria-label="Heart">
          ❤️
        </span>
              
            </button>
             x{data.hearts}
            <div className="date">
              <p>{formatDistanceToNow(new Date(data.createdAt))} ago</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default GetThoughts

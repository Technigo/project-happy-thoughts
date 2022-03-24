import React from "react"

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
              ❤️
            </button>
            x {data.hearts}
            <div className="date">
              <p>{data.createdAt}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default GetThoughts

import React from "react"
import "./happythoughts.css"
import moment from "moment"


export const ThoughtList = props => {


  const { _id, message, hearts, createdAt } = props.thought

  const handleHeartClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: 'POST'
    })
      .then(() => props.onLiked(_id))
      .catch(error => console.error("Error:", error))
  }

  return (


    <article className="thought-card">

      <div className="message">
        {message}
      </div>

      <div className="card-bottom">

        <div>
          <button className="heart-btn"
            onClick={handleHeartClick}
            style={hearts > 0 ? { backgroundColor: "pink" } : { backgroundColor: "#e7e7e7" }}>
            <span role="img" aria-label="Like post">{"❤️ "}</span>
          </button>
          <span className="highlight-grey"> x {hearts} </span>
        </div>
        <div className="elapsed-time">
          <span> {moment(createdAt).fromNow()} </span>
        </div>

      </div>

    </article>
  )
}


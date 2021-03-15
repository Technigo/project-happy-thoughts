import React  from 'react'


const Tought = (props) => {

  return (
    <div className="tought-message">
      <p>{props.message}</p>
      <div className="test">
        <div className="test2">
        <button className="heart-button"><span className="heart-icon" role="img" aria-label="like">❤️</span></button>
        <p className="tought-content heart">x{props.heart}</p> 
        </div>
        <p className="tought-content">{props.time}</p>
      </div>
    </div>
  )
}

export default Tought 
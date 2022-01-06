import React, { useEffect, useState } from "react"
import moment from "moment"
import Button from "./Button"
import { LIKES_API_URL } from "./../utils/urls"
import PopUp from "./PopUp"

const ThoughtCard = (props) => {

  const [postsILike, setPostsILike] = useState([])
  const [newLike, setNewLike] = useState(false)

  const uniquePostsILike = new Set(postsILike)  /* getting rid of repeating IDs with creating a Set */

  useEffect(() => {                             /* using useEffect in combination with setThimeout to show the PopUp for 3sek every time a new value gets added to the set.  */
    setNewLike(true)
    setTimeout(() => setNewLike(false), 3000)
  }, [uniquePostsILike.size])
  

  /* While executing POST request for likes amount, there's no need to implement the body/header - property inside the options object. The information for the API is provided by the unique ID that comes with the URL. */
  const handleSendLike = (id) => {

    const options = {
      method: 'POST',
    }

    fetch(LIKES_API_URL(id), options)
      .then(res => res.json())
      .then((data) => props.fetchAllThoughts())
      
  }    

  return(
    <div className="">
      {newLike && <PopUp 
        className={"pop-up"}
        noOfLikes={uniquePostsILike.size}
      />}
      <div>
        {props.thoughts.map((thought) => (                              /* thoughts get injected from the fetched data */
          <div key={thought._id} className="thought-container">
            <p>{thought.message}</p>
            <p>{thought.author}</p>
            <div className="button-span-container">    
              <Button
                onClick={() => {
                  handleSendLike(thought._id)
                  setPostsILike([thought._id,...postsILike])
                }}
                className={thought.hearts > 0 ? "thought-button" : "thought-button grey"}
                text={<>❤️</>}
              />
              <div className="span-container">
                <span> x{thought.hearts} </span>
                <span> {moment(thought.createdAt).fromNow()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThoughtCard
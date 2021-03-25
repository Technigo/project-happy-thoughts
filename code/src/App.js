import React, { useState, useEffect} from 'react'
import moment from 'moment';
//import { HeartLike } from "./components/HeartLike";
import { API_URL, API_URL_LIKES } from './reusable/url'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [newMessage, setNewMessage] = useState('')

  useEffect(() => {//when mounted or when unmounted
    fetchMessageList()
  }, []) // If it should always be called we do not set a second argument with a comma , 

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.error(err));
  }

  const onNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault(); //if i comment this out my message will not be sent
     
    fetch(API_URL, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newMessage }) 
    })
    .then((res) => res.json ()) //what happens in this section? how is it making real time after submit
    .then((messageList) =>{
      setMessageList((previousMessage) => [messageList, ...previousMessage])
    })
  }

  const onHeartLikeIncrease = (id) => {
    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      } 
    };
       fetch(API_URL_LIKES(id), (options))
        .then(res => res.json())
        .then(receivedMessage => { //newest code received from server updated with likes
          const refreshedMessageList = messageList.map(thought => {
            if (thought._id === receivedMessage._id) {
              thought.hearts += 1
            } 
            return thought //isnt thought and refreshedMessageList the same here?
          })
          setMessageList(refreshedMessageList)
       })   
        .catch(error => alert('Try typing less or more characters (min 5, max 140)', error))  
  }


  return (
    <div className="form-wrapper">
       <form onSubmit={onFormSubmit}> {/*why a form? is it due to a submit button?  */}
        <div className="send-message-card">What makes you happy right now?
          <div>
            <label htmlFor="newMessage"></label>
            <textarea aria-label="write your happy thoughts here"
              className="input-field"
              placeholder="Your happy thoughts here"
              id="newMessage"
              type="text"
              value={newMessage}
              onChange={onNewMessageChange}
            >
            </textarea>
            {/* <textarea className="input-field" type="text" rows="3">Your happy thoughts here"</textarea> */}
          </div>
          <button 
            type ="submit"
            className="submit-button">
            <span role="image">&nbsp; &#10084;&#65039; &nbsp; Upload happiness&nbsp; &#10084;&#65039; &nbsp;</span>
          </button> 
        </div>
      </form>
      {messageList.map(thought => (  // add reverse() after .map if reverse order of messages. 
       <div className="received-message-container" key={thought._id}>
         <h4 className="received-message" >{thought.message}</h4>
         <button className="heart-like-button" onClick={() => onHeartLikeIncrease(thought._id)}>  {/* i want to understand whats happening here, why 2 arrow functions?? and can i place (thought._id) somewhere else? */}
          <span role="image" aria-label="heart-icon">&#10084;&#65039;</span>
         </button> 
         {/* <div> */}
          <span aria-label="number of likes" className="like-counter">x {thought.hearts} </span>
          <span className="date"> {moment(thought.createdAt).fromNow()}</span>
         {/* </div> */}
        </div>
      ))}
      {/* <form onSubmit={onFormSubmit}>
        <label htmlFor="newMessage"></label>
        <input
          placeholder="&hearts; Your happy thoughts here &hearts;"
          id="newMessage"
          type="type"
          value={newMessage}
          onChange={onNewMessageChange}
        >
        </input>
        <button type="submit">Upload thought</button>
      </form> */}
    </div>
    
  )
}

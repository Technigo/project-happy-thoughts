import React, { useEffect, useState } from 'react';
import moment from "moment";

// REMOVE THESE
import ic_like_0 from '../assets/ic_like_0.svg';
import ic_like_1 from '../assets/ic_like_1.svg';

export const MessageList = () => {
  // Default method for fetch is GET.
  // 4. All code inside the component is executed again. 
  const MESSAGES_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts";
  const [messages, setMessages] = useState([]);

  // 5. useEffect is another hook. Helps us with life cycle. Allows us to execute code based on something that's been updated. Primary usage is that we only want this to execute the first time the component is rendered – not everytime the state updates. 
  // 6. useEffect is a function, and we want it to execute the fetch. This will say – when you first are created, exec this function (do the fetch). Fetch will be done on Mount. 
  useEffect(() => {
    fetch(MESSAGES_URL)
      .then((res) => {
        // 1. Res is the response, and we want to transform it with JSON.
        return res.json();
      })
      .then((data) => {
        // 12. Reverses the array.
        // data.reverse()
        // data.sort((a,b) => a.created > b.created)
        // Filter if message contains some non-null value for "text". "IF THIS EXISTS".
        const filteredMessages = data.filter((message) => message.message);
        const limitedMessages = filteredMessages.slice(0,20);
        // 
        // 3. Here is where we have access to the server response. ONLY HERE.
        // 2. Save this data variable, and then we want the component to re-render.
        // console.log(data) UPDATE: Only do messages which aren't blank.
        setMessages(limitedMessages);
        // setMessages(data);
      })
  }, [])
  // 7. The empty array is important. If we want something to execute only once, the dependencies needs to be ONLY AN EMPTY ARRAY.Second argument to useEffect.
  // 8. Fetch can be used for get, and for post. If u need to render the data from the server, you need useEffect.

  // 9. Map, moment.js 

  // 10. When we see an array, we should be thinking "map". Great way of taking an array, and outputting something for each element. 
  // 11. "message" is each object in the array.
  // return <div></div>;
  return (
    <>{messages.map((message) => {
      return (
        <div className="card" key={message._id}>
          <p>{message.message}</p>

          <div className="card-bottom">
            <div className="card-bottom-likes">
              <button className="button-like">
                <img src={ic_like_0} />
              </button>
              <p className="p-subtle">{message.hearts}</p>
            </div>
            <div className="card-bottom-time">
              <p className="p-subtle">{moment(message.createdAt).fromNow()}</p>
            </div>
          </div>

        </div>
      )
    })}

    </>
  )
}

// When the messages are retreived from the server, we want to re-render the component.
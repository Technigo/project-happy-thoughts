import React from "react";

const MessageList = ({ loading, messageList, setMessageList }) => {
    if (loading === true) {
        return <h1>Loading in progress...</h1>
      }
    
    const onTaskCheckChange = (event) => {
        event.preventDefault();
        setMessageList(() => messageList.map((singleMessage) => {
          if (singleMessage._id === event._id) {
            return {
              ...singleMessage, isChecked: !singleMessage.isChecked
            };
          }
          return singleMessage;
        }));
      }
    
      return (
        <section>
          {messageList.map((event) => (
            <div key={event._id} className="message-box">
              {console.log(event)}
              <p>{event.message}</p>
              <input
                type="checkbox"
                value={event}
                placeholder="Type your thoughts here..."
                onChange={() => onTaskCheckChange(event)}
                checked={event.isChecked} />
            </div>
            
          ))}
        </section>
      )
    }

export default MessageList
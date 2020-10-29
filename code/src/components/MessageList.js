import React from "react";
import moment from "moment";

export const MessageList = ({ messageList }) => {
  //   const MESSAGES_URL = "https://wk11livesession.herokuapp.com/messages";
  //   const [messages, setMessages] = useState([]);
  //   //Possibility to create function, extract it and import it to the useEffect//
  //   useEffect(() => {
  //     fetch(MESSAGES_URL)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         //Reverses the messages, newest on top
  //         data.reverse();
  //         //Another method to reverse messages

  //         //data.sort((a, b) => a.created > b.created);

  //         //Function to sort out the blank messages
  //         const filteredMessages = data.filter((message) => message.text);
  //         //Save the data to state
  //         setMessages(filteredMessages.slice(0, 10));
  //       });
  //   }, []);

  return (
    <div>
      {messageList.map((message) => {
        return (
          <p className="message" key={message._id}>
            {" "}
            {message.message}
            <span className="message-time">
              {moment(message.createdAt).fromNow()}
            </span>
          </p>
        );
      })}
    </div>
  );
};

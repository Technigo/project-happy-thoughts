import React, { useState, useEffect } from "react";

import MessageList from "./components/MessageList";
import MessageInput from "./components/MessageInput";
// import Loading from "./components/Loading";
import "./app.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const URL = "https://happy-thoughts-technigo.herokuapp.com/";

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(URL)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setTimeout(() => {
  //         setMessages(data);
  //         setLoading(false);
  //       }, 3000);
  //     });
  // }, []);

  return (
    <div className="app-container">
      <MessageInput setMessages={setMessages} />
      {/* <Loading loading={loading} /> */}
      <MessageList messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default App;

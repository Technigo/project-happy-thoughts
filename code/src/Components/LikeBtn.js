import React from "react";

const LikeBtn = ({ messageID, fetchMessage, messages }) => {
  const sendLike = (messageID) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(
      `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`,
      options
    )
      .then((res) => res.json())
      .then(() => fetchMessage);
  };

  return (
    <div>
      <button onClick={sendLike}>hjärta</button>x{messages.hearts}
    </div>
  );
};
export default LikeBtn;

import React from "react";

const LikeBtn = ({ messageID, messages, fetchMessages }) => {
  const sendLike = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
//original url: `https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`
    fetch(
      `https://happy-thoughts-api-frida.herokuapp.com/thoughts/${messageID}/like`,
      options
    )
      .then((res) => res.json())
      .then(() => fetchMessages());
  };

  return (
    <div>
      <button className="likebtn" onClick={sendLike}>
        <span role="img" aria-label="Heart-emoji">
          ❤️
        </span>
      </button>
      <span className="likes">x{messages.hearts}</span>
    </div>
  );
};
export default LikeBtn;

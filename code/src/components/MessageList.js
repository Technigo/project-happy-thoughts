
import React from "react";
import moment from "moment";

export const MessageList = ({ messageList, hearts, message }) => {
  const onClickedHeart = () => {
    hearts(messageList._id);
  };

  return (
    <section>

<div className="message-list">
          {messageList.map(message => (
            <p className="message" key={message.createdAt}>
                        {message.message}
                <span className="message-time">
                 {moment(message.createdAt).fromNow()}
                </span>
            </p>
                ))
            }
        </div>
    

      <article className="messages-stored">
        <h3 className="message">{message}</h3>
        <p>
          <button
            className="heart-button"
            onClick={onClickedHeart}
            className={
              hearts > 5
                ? "superLiked"
                : hearts > 0
                ? "liked"
                : "notLiked"
            }
          >
            <span role="img" aria-label="Heart">
              {"❤️"}
            </span>
          </button>
          x {hearts}
        </p>
        
      </article>
    </section>
  );
};

// import React from "react";
// import moment from "moment";

// export const MessageList = ({
//   messageList,
//   message,
//   onHeartsChange
// }) => {
//   const onClickedHeart = () => {
//     hearts(messageList._id);
//   };

//   return (
//     <section className="message-list-container">
//       <article>
//         <div className="message">
//           <h3>
//             {message}
//           </h3>
//         </div>

//           {messageList.map((message) => (
//             <p className="message" key={message._id}  onHeartsChange={onHeartsChange}>
//               {message.message}
//               <span className="message-time">
//                 <p className="post-time">
//                   {moment(message.createdAt).fromNow()}
//                 </p>
//               </span>
//             </p>
//           ))}
      
//       </article>
//     </section>
//   );
// };

import React, { useState } from "react";
import moment from "moment";

import { LikeCountContainer, LikeButton, LikeCount, Time } from './MessageListItem.style';
import { ButtonContainer } from '../../assets/styles/style';

import { LIKES_URL } from '../../api/urls'

const MessageListItem = ({ message }) => {
  const [likes, setLikes] = useState(message.hearts);

  const handleLikesIncrease = (id) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then((data) => setLikes(data.hearts))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <p>
        {message.message}
      </p>
      <ButtonContainer>
        <div>
          <LikeButton onClick={() => handleLikesIncrease(message._id)} likes={likes}>❤️</LikeButton>
          <LikeCount>
            &#215; {likes}
          </LikeCount>
        </div>
        <Time>{moment(message.createdAt).fromNow()}</Time>
      </ButtonContainer>
    </>
  )
}

export default MessageListItem;
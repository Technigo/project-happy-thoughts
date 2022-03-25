import React from "react";
import { formatDistance } from "date-fns";

const Item = ({ item, handleOnLike }) => {
  const { _id, message, hearts, createdAt } = item;
  const onLike = () => {
    handleOnLike(_id);
  };
  return (
    <li className="item">
      <p className="item-message">{message}</p>
      <div className="item-attributes">
        <div className="button-container">
          <button className="heart-button" type="button" onClick={onLike}>
            <span role="img" aria-label="heart icon">
              ❤️
            </span>
          </button>
          <span className="count"> x {hearts}</span>
        </div>
        <div className="posted">
          {formatDistance(new Date(createdAt), new Date())} ago
        </div>
      </div>
    </li>
  );
};
export default Item;

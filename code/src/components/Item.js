import React from "react";
import { formatRelative } from "date-fns";

const Item = ({ item, handleOnLike }) => {
  const { _id, message, hearts, createdAt } = item;
  const onLike = () => {
    console.log("item.heart", item.hearts);
    console.log("hearts", hearts);
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
          {formatRelative(new Date(createdAt), new Date())}
        </div>
      </div>
    </li>
  );
};
export default Item;

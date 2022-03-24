/* eslint-disable operator-linebreak */
import React from "react";
import Item from "./Item";

const List = ({ list, handleOnLike }) => (
  <ul className="lists">
    {list &&
      list.map((item) => (
        <Item key={item.createdAt} item={item} handleOnLike={handleOnLike} />
      ))}
  </ul>
);

export default List;

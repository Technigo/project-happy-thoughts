import React from "react";

export const Sort = ({ onChange }) => {
  return (
    <section className="sort-container">
      <select className="selector-sort" type="text" onChange={onChange}>
        <option value="">Sort thoughts by:</option>
        <option value="default">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="likes">Most likes</option>
      </select>
    </section>
  );
};

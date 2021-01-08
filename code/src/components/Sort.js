import React from 'react';
import './Sort.css';

export const Sort = ({ onChange }) => {
  return (
    <article tabIndex="0" className="sort-wrapper">
      <select className="selector-sort" type="text" onChange={onChange}>
        <option value="">Sort thoughts by:</option>
        <option value="default">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="likes">Most likes</option>
      </select>
    </article>
  );
};

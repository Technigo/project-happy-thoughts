//for every specific sent thought
/*
import React, { useState } from 'react';

const SingleTask = ({ message, checked }) => {
  const [singleTaskChecked, setSingleTaskChecked] = useState(checked);

  const onSingleTaskCheckboxChange = () => {
    setSingleTaskChecked(!singleTaskChecked);
  }
  if (!message || checked === undefined) {
    return ( 
      <p>NO DATA</p>
    );
  }
  return (
    <>
      <p>{message}</p>
      <input type="checkbox" checked={singleTaskChecked} onChange={onSingleTaskCheckboxChange} />
    </>
  );
}

export default SingleTask;

*/
/* eslint-disable linebreak-style */
import React, { useState } from 'react';

const SingleTask = ({ description, checked }) => {
  const [singleTaskChecked, setSingleTaskChecked] = useState(checked);

  const onSingleTaskCheckboxChange = () => {
    setSingleTaskChecked(!singleTaskChecked);
  }
  /* if (!description || checked === undefined) {
    return (
      <p>NO DATA</p>
    );
  } */
  return (
    <>
      <p>{description}</p>
      <input
        type="checkbox"
        checked={singleTaskChecked}
        onChange={onSingleTaskCheckboxChange} />
    </>
  )
}

export default SingleTask;
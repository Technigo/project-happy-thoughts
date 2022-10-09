import React, { useState } from 'react';

const SinglePost = ({ message, checked }) => {
  const [singlePostChecked, setSinglePostChecked] = useState(checked)
  const onSinglePostCheckboxChange = () => {
    setSinglePostChecked(!singlePostChecked);
  }
  return (
    <>
      <p>{message}</p>
      <input type="checkbox" checked={checked} onChange={onSinglePostCheckboxChange} />
    </>
  )
}

export default SinglePost;
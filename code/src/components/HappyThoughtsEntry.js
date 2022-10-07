// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const SingleTask = ({ message, hearts }) => {
  const [singleTaskChecked, setSingleTaskChecked] = useState(hearts > 0);
  const [heartsCounter, setHearts] = useState(hearts);
  const onSingleTaskCheckboxChange = () => {
    setSingleTaskChecked(!singleTaskChecked);
  }
  const incrementHeart = () => {
    setHearts(heartsCounter + 1);
  }

  if (!message) {
    return (
      <p>NO DATA</p>
    )
  }
  return (
    <article>
      <p>{message}</p>
      <input type="checkbox" checked={singleTaskChecked} onChange={onSingleTaskCheckboxChange} />

      <button className={hearts === 0 ? 'button-likes-haslikes' : 'button-likes-nolikes'} onClick={incrementHeart} type="button">❤️</button>
      {' '}x {heartsCounter}
    </article>
  )
}

export default SingleTask;
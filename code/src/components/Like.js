import React, { useState } from 'react';
import { HAPPY_URL } from './Urls';

const Like = ({ message, checked }) => {
  const [singleTaskChecked, setSingleTaskChecked] = useState(checked);

  const onSingleTaskCheckboxChange = () => {
    setSingleTaskChecked(!singleTaskChecked);
    if(!singleTaskChecked) {
        fetch(HAPPY_URL)
        .then((res) => res.json())
        .then((data) => setTaskList(data))
        .catch((error) => console.error(error))
        .finally(() => setSingleTaskChecked(true));
    }
  
    const handleNewLikeChange = (event) => {
      addLike(event.target.value)
    }
    }
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

export default Like;
import React from 'react'

import Emoji from '../utils/Emoji'
import '../components/SubmitButton.css'

const SubmitButton = () => {

  return (
    <button 
    className="submit-button" 
    type="submit">
      <Emoji symbol="❤️" />
       Send Happy Thought!
      <Emoji symbol="❤️" />
    </button>
  );
};

export default SubmitButton
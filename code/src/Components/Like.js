import React from "react";

const Like = ({ onStepChange, setNewThought }) => {
  return (
    <button value="{thought._v}" onClick={onStepChange}>
      Like
    </button>
  );
};

export default Like;

import React from 'react';

import Button from 'components/Button/Button';

import './Fom.css'

const Form = () => {
  return (
    <form className="card">
      <label className="input--label" htmlFor="happyThought">
        What is making you happy right now?
        <textarea className="input--textarea" id="happyThought" rows="5" cols="45" />
      </label>
      <Button isSubmit />
    </form>
  );
};

export default Form;

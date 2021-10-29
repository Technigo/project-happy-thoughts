import React from "react";

const Form = ({ onFormSubmit, form, setForm }) => {
  return (
    <form className="list newThought" onSubmit={onFormSubmit}>
      <div className="form-container">
        <label htmlFor="form">
          <p>What's making you happy right now?</p>
        </label>

        <input
          type="text"
          value={form}
          onChange={(event) => setForm(event.target.value)}
        />

        <button className="send-button" type="submit">
          <p>
            <span role="img" aria-label="heart emoji">
              {" "}
              ❤️{" "}
            </span>{" "}
            Send happy Thought!{" "}
            <span role="img" aria-label="heart emoji">
              {" "}
              ❤️{" "}
            </span>
          </p>
        </button>
      </div>
    </form>
  );
};

export default Form;

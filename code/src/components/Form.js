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
          //I also want to incorporate the counter... min 5 max 140.
        />

        <button
          className="send-button"
          type="submit"
          //This disabled thing dont seem to work...
          disabled={form.length > 5 || form.length > 140}
        >
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

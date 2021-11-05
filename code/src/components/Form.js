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
          placeholder="Write your thoughts here."
          value={form}
          onChange={(event) => setForm(event.target.value)}
        />
        <div className="counter-styling">
          <button
            className="send-button"
            type="submit"
            disabled={form.length < 5 || form.length > 140}
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
          <p className="letter-counter">{140 - form.length}/ 140 </p>
        </div>
      </div>
    </form>
  );
};

export default Form;

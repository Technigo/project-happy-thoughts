import React from "react";

export const AddHappyThought = () => {
  const handleFormSubmit = event => {
    console.log(document.querySelector("textarea").value)
    event.preventDefault();
    const content = `{"message":"${document.querySelector("textarea").value}"}`
    console.log(content)
    
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      body: JSON.stringify(content)
    })
      .then(res => {
        res.json();
      })
      .then(newThought => {
        console.log(newThought);
        // Now you have `newThought` which is the response from the
        // API as documented at the top of this readme. You can use
        // it to update the `thoughts` array:
        //setThoughts((previousThoughts) => [newThought, ...previousThoughts])
      });
  };

  return (
    <form
      onSubmit={event => handleFormSubmit(event)}
      className="add-happy-thought"
      // onSubmit={event => {
      //   event.preventDefault();
      //   let content = `{ 'message': "${
      //     document.querySelector("textarea").value
      //   }"}`;
      //   console.log(content);
      //   fetch("https://technigo-thoughts.herokuapp.com/", {
      //     method: "post",
      //     body: JSON.stringify({ message: "Hello world" })
      //   }).then(response => response.json().then(json => console.log(json)));
      // }}
    >
      <label>
        <span id="thought-question">Whats making you happy right now ? </span>
        <br />
        <textarea className="add-thought-text" />
      </label>
      <br />
      <button className="button-submit" type="submit">
        &#10084;&#65039;Send Happy Thought &#10084;&#65039;
      </button>
    </form>
  );
};

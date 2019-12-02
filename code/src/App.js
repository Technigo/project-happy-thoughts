import React, { useState, useEffect } from "react";
import { NewMessage } from "NewMessage";
import { ButtonMessage } from "ButtonMessage";

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  let [newMessage, setNewMessage] = useState();

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => json.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)))
      .then(json => setThoughts(json));
  }, []);

  const addThought = event => {
    event.preventDefault();
    if (!newMessage) return;
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: newMessage
      })
    })
      .then(res => res.json())
      .then(json => {
        const newThoughts = [...thoughts, json].sort((a, b) =>
          a.createdAt < b.createdAt ? 1 : -1
        );
        setThoughts(newThoughts);
        setNewMessage("");
      });
  };

  return (
    <div className="container">
      <div className="main-message-container">
        <p>What´s making you happy right now?</p>
        <NewMessage
          addThought={addThought}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
        />
        <ButtonMessage onClick={addThought} />
      </div>
    </div>
  );

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   fetch("https://technigo-thoughts.herokuapp.com/", {
  //     method: "POST",
  //     body: JSON.stringify({ message: "Hello" })
  //   })
  //     .then(res => res.json())
  //     .then(newThought => {
  //       setThoughts(previousThoughts => [newThought, ...previousThoughts]);
  //     });
  // };

  // useEffect(() => {
  //   document.title = `You clicked ${newEl} times`;
  //   console.log({ newEl });
  // });

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   {
  //     thoughts.map(thought => {
  //       fetch(`https://technigo-thoughts.herokuapp.com/${thought._id}/like`, {
  //         method: "POST"
  //       })
  //         .then(res => res.json())
  //         .then(() => {
  //           setNewEl(previousEl => previousEl + newEl);
  //         });
  //     });
  //   }
  // };

  //   return (
  //     <div>
  //       <ul>
  //         {thoughts.map(thought => {
  //           return (
  //             <li key={thought._id}>
  //               {thought.message}
  //               <button onClick={() => setNewEl(thoughts)}>Click me</button>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //       {newEl && (
  //         <NewElement
  //           message={newEl.message}
  //           hearts={newEl.hearts}
  //           _id={newEl._id}
  //         />
  //       )}
  //     </div>
  //   );
  // };
};

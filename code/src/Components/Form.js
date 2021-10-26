import react from "react";

export const onFormSubmitt = (event) => {
  event.preventDefault();

  const thoughts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: newThought }),
    fetch(API_URL, thoughts)
    .then((res) => res.json())
    .then((data) => console.log(data));
  }
    return (     
    <div>
          {/* <Like onStepChange={onStepChange} /> */}
          <div className="form">
            {/* <p>What's making you happy right now?</p> */}
            <form onSubmit={onFormSubmitt}>
              <label htmlFor="newThought">
                What's is making you happy right now?
              </label>
              <input
                id="newThought"
                className="input"
                type="text"
                value={newThought}
                onChange={(e) => setNewThought(e.target.value)}
              />
              <button type="submit" className="send-btn">
                <span className="send-heart">❤</span>Send happy thought
                <span className="send-heart">❤</span>
              </button>
            </form>
    
            {/* <button type="submit" className="send-btn">
              <span className="send-heart">❤</span>Send happy thought
              <span className="send-heart">❤</span>
            </button> */}
          </div>
  );
}

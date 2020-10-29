import React from "react";
import moment from "moment";


// import THOUGHTS_URL from "../urls";

import "./thoughts-list.css";

const ThoughtsList = ({ thoughtsArray }) => {
  // const [thoughts, setThoughts] = useState([]);

  // useEffect(() => {
  //   fetch(THOUGHTS_URL)
  //     .then(res => res.json())
  //     // .then(json => console.log(json))
  //     .then(json => setThoughts(json));

  // }, [])

  return (
    <div className="thoughts-list-container">
      <ul>
        {thoughtsArray.map(thought => (
          <div className="thought-container" key={thought._id}>
            <li>{thought.message} <span className="time-stamp">{moment(thought.createdAt).fromNow()}</span></li>
            <button>a heart!</button>
          </div>
        ))}
      </ul>

    </div>
  )

};

export default ThoughtsList;
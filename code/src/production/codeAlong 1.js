// component lifecycle and useEffect
// v2
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const HelloWorld = () => {
  return <p>Hello world!</p>;
};

const App = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("Peggy");
  useEffect(() => {
    console.log("app change", visible);
  }, [visible]);
  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>Show / Hide</button>
      <button onClick={() => setName("Bob")}>Name</button>

      {visible && <HelloWorld />}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// v1


import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const HelloWorld = () => {
  useEffect(() => {
    console.log("Mounted!");

    return () => {
      console.log("Unmounted");
    };
  });

  return <p>Hello world!</p>;
};

const App = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log("app effect:", visible);
  });
  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>Show / Hide</button>
      {visible && <HelloWorld />}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

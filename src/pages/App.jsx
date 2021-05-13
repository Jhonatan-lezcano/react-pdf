import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <Link to="/pdf" target="_blank">
        <button>Ir a pdf</button>
      </Link>
    </div>
  );
};

export default App;

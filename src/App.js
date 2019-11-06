import React from "react";
import SocialCard from "./components/SocialCard";
import socialCardData from "./data/SocialCardData.js";

import "./styles.css";

function App() {
  return (
    <ul className="list-style">
      {socialCardData.map(data => (
        <li key={data.id}>
          <SocialCard data={data} />
        </li>
      ))}
    </ul>
  );
}

export default App;

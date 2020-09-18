import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Tehnologies />
    </div>
  );
};

const Tehnologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>HTML</li>
        <li>JS</li>
      </ul>
    </div>
  );
};
const Header = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>News Feed</li>
        <li>Messages</li>
      </ul>
    </div>
  );
};

export default App;

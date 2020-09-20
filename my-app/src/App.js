import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Header />
        <Navigation />
        <Profile/>
      </div>
    </div>
  );
};

export default App;

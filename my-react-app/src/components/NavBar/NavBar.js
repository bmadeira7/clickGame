import React from "react";

import "./NavBar.css";
//this is my NavBar component which displays the title of the game, the current score, and the best score
const NavBar = props => (
  <nav className="bg-dark text-white">
    <ul>
      <li className="title">🔊Garage Kings Click Game🔊</li>
      <li id="currentScore" className="scores">
        Current Score: {props.score}
      </li>
      <li id="bestScore" className="scores">
        Best Score: {props.bestScore}
      </li>
    </ul>
    <h4 className="text-center pb-2 rules">Click on every UK Garage producer BUT don't click the same image twice!</h4>
  </nav>
);

export default NavBar;

import React from "react";
import "./Pictures.css";
//this is my pictures component that sets up each picture to listen for a user click
//Once clicked, the clickCount function is run on the picture matching that id
const Pictures = props => (
  <div className="pictures" onClick={() => props.clickCount(props.id)}>
    <div className="image-container">
      <img src={props.image} alt={props.name} />
   
    
    </div>
  </div>
);
// exports this Pictures component to be imported in App.js
export default Pictures;
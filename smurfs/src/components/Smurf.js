import React from "react";

// import Smurf from "./Character";

const Smurf = props => {
  return (
    <div>
      <h1>{props.smurf.name}</h1>
      <p>{props.smurf.age} years old</p>
      <p>{props.smurf.height} tall</p>
    </div>
  );
};

export default Smurf;
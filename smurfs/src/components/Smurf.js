import React from "react";

const Smurf = props => {
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age} years old</p>
      <p>{props.smurf.height} tall</p>
    </div>
  );
};

export default Smurf;
import React from "react";

function Beignet(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="Beignet">
      <h1>{props.title}</h1>
      <h3 className="description">{props.note}</h3>
      <p className="currentUsage">Current Usage : {props.current}</p>      
      <p className="budget">Monthly Budget: {props.max}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Beignet;

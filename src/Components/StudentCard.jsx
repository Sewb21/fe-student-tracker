import React from "react";

function StudentCard(props) {
  return (
    <article className="Card">
      <h3>Name: {props.name}</h3>
      <p>Starting Cohort: {props.startingCohort}</p>
      <p>Current Block: {props.currentBlock}</p>
    </article>
  );
}

export default StudentCard;

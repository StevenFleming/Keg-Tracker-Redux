import React from "react";
import { v4 } from "uuid";

function NewCard(props) {
  //handleNewCardSubmission
  // onNewCardCreation
  function handleNewCardSubmission(event) {
    event.preventDefault();
    props.onNewCardCreation({
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <h2>Add a New Keg</h2>
      <hr />
      <form onSubmit={handleNewCardSubmission}>
        <button type="submit">Submit Orca Card</button>
      </form>
    </React.Fragment>
  );
}

export default NewCard;

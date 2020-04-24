import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types"; //import PropTypes

function NewKeg(props) {
  //handleNewCardSubmission
  // onNewCardCreation
  function submitNewKeg(event) {
    event.preventDefault();

    props.submitNewKeg({
      // name: event.target.name.value,
      // brand: event.target.name.value,
      type: event.target.type.value,
      cost: parseInt(event.target.cost.value),
      // pint: parseInt(event.target.pint.value),
      tapped: isBool(event.target.tapped.value),
      id: v4(),
    });
  }
  function isBool(string) {
    if (string === "true") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <React.Fragment>
      <h2>Add a New Keg</h2>
      <hr />
      <form onSubmit={submitNewKeg}>
        <label htmlFor="type">What Type of Keg is it?</label>
        <br />
        <select name="type">
          <option value="IPA">IPA</option>
          <option value="Stout">Stout</option>
          <option value="Pislner">Pislner</option>
          <option value="Brown Ale">Brown Ale</option>
        </select>
        <br />

        <label htmlFor="tapped">Is this Keg tapped</label>
        <br />
        <select name="tapped">
          <option value="true">Yes</option>
          <option value="false">False</option>
        </select>
        <br />

        <label hmtlfor="cost"> What is the cost of this Keg</label>
        <input type="text" id="cost" name="cost"></input>
        <br />

        <button type="submit">Submit Keg </button>
      </form>
    </React.Fragment>
  );
}

NewKeg.propTypes = {
  onNewTicketCreation: PropTypes.func,
};
export default NewKeg;

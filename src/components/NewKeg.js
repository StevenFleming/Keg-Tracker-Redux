import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types"; //import PropTypes

function NewKeg(props) {
  //handleNewCardSubmission
  // onNewCardCreation
  function submitNewKeg(event) {
    event.preventDefault();

    props.submitNewKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      style: event.target.style.value,
      cost: parseInt(event.target.cost.value),
      pints: parseInt(event.target.pints.value),
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
        <label htmlFor="style">What style of Keg is it?</label>
        <br />
        <br />
        <select name="style">
          <option value="IPA">IPA</option>
          <option value="Stout">Stout</option>
          <option value="Pislner">Pislner</option>
          <option value="Brown Ale">Brown Ale</option>
        </select>
        <br />
        <br />

        <label htmlFor="tapped">Is this Keg tapped</label>
        <br />
        <select name="tapped">
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <br />
        <br />

        <label hmtlfor="name"> What is the Name of this Keg</label>
        <input type="text" id="name" name="name"></input>
        <br />
        <br />
        <label hmtlfor="brand"> What Brand is this Keg</label>
        <input type="text" id="brand" name="brand"></input>
        <br />
        <br />
        <label hmtlfor="cost"> What is the cost of this Keg</label>
        <input type="text" id="cost" name="cost"></input>
        <br />
        <br />
        <label hmtlfor="pints"> How many pints does this Keg Hold</label>
        <input type="text" id="pints" name="pints"></input>
        <br />
        <br />

        <button class="button" type="submit">
          Submit Keg{" "}
        </button>
      </form>
    </React.Fragment>
  );
}

NewKeg.propTypes = {
  onNewTicketCreation: PropTypes.func,
};
export default NewKeg;

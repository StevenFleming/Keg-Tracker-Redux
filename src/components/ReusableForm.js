import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.submitNewKeg}>
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
        <label hmtlfor="pints"> How many Pints is this Keg Holding</label>
        <input type="text" id="pints" name="pints"></input>
        <br />
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;

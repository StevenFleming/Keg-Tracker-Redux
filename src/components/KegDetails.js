import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  console.log(props.Keg.name);
  console.log(props);
  return (
    <React.Fragment>
      Keg Details
      <p>Name: {props.Keg.name}</p>
      <p>Brand:{props.Keg.brand}</p>
      <p>Type: {props.Keg.type}</p>
      <p>Cost: {props.Keg.cost}</p>
      <p>Pints Left:{props.Keg.pints}</p>
      <p>ID : {props.Keg.id}</p> */}
      <p>This Keg Tapped: {props.Keg.tapped.toString()}</p>
    </React.Fragment>
  );
}

KegDetails.propTypes = {};

export default KegDetails;

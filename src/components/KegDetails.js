import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  // console.log(props.Keg.name);
  console.log(props);
  return (
    <React.Fragment>
      <h2>Keg Details</h2>
      <p>Name: {props.Keg.name}</p>
      <p>Brand:{props.Keg.brand}</p>
      <p>Type: {props.Keg.type}</p>
      <p>Cost: {props.Keg.cost}</p>
      <p>Pints Left:{props.Keg.pints}</p>
      <p>Cost per Pint:{props.Keg.cost / props.Keg.pints} </p>
      <p>ID : {props.Keg.id}</p>
      <p>This Keg Tapped: {props.Keg.tapped.toString()}</p>
    </React.Fragment>
  );
}

KegDetails.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  type: PropTypes.string,
  cost: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  tapped: PropTypes.bool,
};

export default KegDetails;

import React from "react";
import PropTypes from "prop-types";

function KegCard(props) {
  return (
    <React.Fragment>
      <h3>KegCard</h3>
      <p>{props.selectedKeg.name}</p>
      <p>{props.selectedKeg.brand}</p>
      <p>{props.selectedKeg.type}</p>
      <p>{props.selectedKeg.cost}</p>
      <p>{props.selectedKeg.pints}</p>
      <p>{props.selectedKeg.tapped.toString()}</p>
    </React.Fragment>
  );
}

KegCard.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  type: PropTypes.string,
  cost: PropTypes.number,
  pints: PropTypes.number,
  tapped: PropTypes.bool,
};

export default KegCard;

import React from "react";
import PropTypes from "prop-types";

function KegCard(props) {
  return (
    <React.Fragment>
      <h3>KegCard</h3>
      <p>Name: {props.selectedKeg.name}</p>
      <p>Brand:{props.selectedKeg.brand}</p>
      <p>Type: {props.selectedKeg.type}</p>
      <p>Cost: {props.selectedKeg.cost}</p>
      <p>Pints Left:{props.selectedKeg.pints}</p>
      <p>This Keg Tapped: {props.selectedKeg.tapped.toString()}</p>
      <button onClick={() => props.selectKeg(props.selectedKeg.id)}>
        Details
      </button>
      {/* <button onClick={() => props.pourABeer(props.selectedKeg.id)}>
        Pour a Beer
      </button> */}
      <button onClick={() => props.delete(props.selectedKeg.id)}>
        Delete Keg
      </button>
    </React.Fragment>
  );
}

KegCard.propTypes = {
  selectedKeg: PropTypes.func,
  pourABeer: PropTypes.func,
  delete: PropTypes.func,

  name: PropTypes.string,
  brand: PropTypes.string,
  type: PropTypes.string,
  cost: PropTypes.number,
  pints: PropTypes.number,
  tapped: PropTypes.bool,
};

export default KegCard;

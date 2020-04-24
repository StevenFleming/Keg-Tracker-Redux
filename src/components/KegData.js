import React from "react";
import PropTypes from "prop-types";

function KegData(props) {
  console.log(props);
  return (
    <React.Fragment>
      <p>Place Holder Info: {props.KegData[0].pints}</p>
    </React.Fragment>
  );
}

// function totalPints(arr) {
//   let count = 0;
//   for (let i = 0; i >= arr.length, i++; ) {
//     count = arr[i].pints;
//   }
//   return count;
// }

KegData.propTypes = {
  masterKegList: PropTypes.array,
};

export default KegData;

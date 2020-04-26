import React from "react";
import PropTypes from "prop-types";

function KegData(props) {
  console.log(props.masterKegList);
  return (
    <React.Fragment>
      <p>Total Pints: {pintsSum(props.masterKegList)}</p>
      <p>Total Cost: {totalCost(props.masterKegList)} </p>
      <p>
        {" "}
        Average Cost per Pint:{" "}
        {totalCost(props.masterKegList) /
          pintsSum(props.masterKegList).toPrecision(1)}
        {" $ "}
      </p>

      <p>IPA's on draft: {totalIPAs(props.masterKegList)}</p>
    </React.Fragment>
  );
}

function pintsSum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i].pints;
    console.log(arr[i].pints);
  }
  return count;
}

function totalCost(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i].cost;
    console.log(arr[i].cost);
  }
  return count;
}

function totalIPAs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "IPA") {
      count++;
    }
  }
  return count;
}

// function totalType(arr, type) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].type === type) {
//       count++;
//     }
//   }
//   return count;
// }

KegData.propTypes = {
  masterKegList: PropTypes.array,
};

export default KegData;

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
      <p>Total Kegs: {totalKegs(props.masterKegList)}</p>
      <p>Taped Kegs: {tappedKegs(props.masterKegList)} </p>
      <p>Untapped Kegs: {untappedKegs(props.masterKegList)}</p>

      <p>IPAs on draft: {totalStyle(props.masterKegList, "IPA")}</p>
      <p>Stouts on draft:{totalStyle(props.masterKegList, "Stout")}</p>
      <p> Pilsners on draft:{totalStyle(props.masterKegList, "Pilsner")}</p>
      <p> Brown Ales on draft:{totalStyle(props.masterKegList, "Brown Ale")}</p>
    </React.Fragment>
  );
}

function totalKegs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
  }
  return count;
}

function untappedKegs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].tapped == false) {
      count++;
    }
  }
  return count;
}

function tappedKegs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].tapped == true) {
      count++;
    }
  }
  return count;
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

function totalStyle(arr, style) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].style === style) {
      count++;
    }
  }
  return count;
}

KegData.propTypes = {
  masterKegList: PropTypes.array,
};

export default KegData;

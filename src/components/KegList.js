import React from "react";
import KegCard from "./KegCard";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      {props.masterKegList.map((keg, i) => (
        <KegCard
          selectedKeg={props.masterKegList[i]}
          selectKeg={props.selectKeg}
          pourABeer={props.pourABeer}
          delete={props.delete}
        />
      ))}
    </React.Fragment>
  );
}

KegList.propTypes = {
  masterKegList: PropTypes.array,
  selectKeg: PropTypes.func,
};

export default KegList;

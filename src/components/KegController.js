import React from "react";
// import KegData from "./KegData";
import KegList from "./KegList";
// import NewKegForm from "./NewKegForm";

const masterKegList = [
  {
    name: "Space Dust IPA",
    brand: "Elysian",
    type: "IPA",
    cost: 184,
    pints: 124,
    tapped: false,
  },
];

class KegController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      brand: "",
      type: "",
      cost: 0,
      pints: 124,
      tapped: false,
      masterKegList: masterKegList,
    };
  }

  render() {
    return (
      <React.Fragment>
        <KegList masterKegList={this.state.masterKegList} />
      </React.Fragment>
    );
  }
}

export default KegController;

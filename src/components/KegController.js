import React from "react";
import KegData from "./KegData";
import KegList from "./KegList";
import NewKeg from "./NewKeg";

const masterKegList = [
  {
    name: "Space Dust IPA",
    brand: "Elysian",
    type: "IPA",
    cost: 184,
    pints: 124,
    tapped: false,
    id: "fakeId1",
  },

  {
    name: "Piny the Elder",
    brand: "Russian River Brewing",
    type: "IPA",
    cost: 204,
    pints: 124,
    tapped: false,
    id: "fakeId2",
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
        <KegData KegData={this.state.masterKegList} />
        <NewKeg submitNewKeg={this.handleAddingNewKegToList} />
      </React.Fragment>
    );
  }
  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
    });
    console.log(this.state.masterKegList);
  };
}

export default KegController;

import React from "react";
import KegData from "./KegData";
import KegList from "./KegList";
import NewKeg from "./NewKeg";
import KegDetails from "./KegDetails";

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
      selectedKeg: null,
      formVisibleOnPage: true,
    };
  }

  render() {
    // conditional Rendering Logic

    let currentVisibleState = <KegData KegData={this.state.masterKegList} />;
    if (this.state.selectedKeg != null) {
      currentVisibleState = <KegDetails Keg={this.state.selectedKeg} />;
    }

    return (
      <React.Fragment>
        {currentVisibleState}
        <KegList
          masterKegList={this.state.masterKegList}
          selectKeg={this.handleChangingSelectedKeg}
        />
        <NewKeg submitNewKeg={this.handleAddingNewKegToList} />
      </React.Fragment>
    );
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    this.setState({
      selectedKeg: selectedKeg,
      formVisibleOnPage: false,
    });
    console.log("Details selected! ", selectedKeg);
  };

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
    });
    console.log(this.state.masterKegList);
  };
}

export default KegController;

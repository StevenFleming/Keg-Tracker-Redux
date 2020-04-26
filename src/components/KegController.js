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

    let currentVisibleState = (
      <KegData masterKegList={this.state.masterKegList} />
    );
    if (this.state.selectedKeg != null) {
      currentVisibleState = <KegDetails Keg={this.state.selectedKeg} />;
    }

    return (
      <React.Fragment>
        <div id="body1">{currentVisibleState}</div>
        <div id="body2">
          <KegList
            masterKegList={this.state.masterKegList}
            selectKeg={this.handleChangingSelectedKeg}
            delete={this.handleDeletingKeg}
          />
        </div>
        <div id="body3">
          <NewKeg submitNewKeg={this.handleAddingNewKegToList} />
        </div>
      </React.Fragment>
    );
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(
      (keg) => keg.id !== id
    );
    this.setState({
      masterKegList: newMasterKegList,
      selectedTicket: null,
    });
  };

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

  // pourABeer = (id) => {
  //   const pintsLeft =
  //     this.state.masterKegList.filter((keg) => keg.id === id)[0].pints - 1;

  //   this.setState({
  //     selectKeg,
  //   });
  //   console.log(selectedKeg.pints);
  // };

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
    });
    console.log(this.state.masterKegList);
  };
}

export default KegController;

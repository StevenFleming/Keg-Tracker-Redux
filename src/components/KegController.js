import React from "react";
import KegData from "./KegData";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <KegData />
        <NewKegForm />
        <KegList />
      </React.Fragment>
    );
  }
}

export default App;

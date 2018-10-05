import React, { Component } from "react";
import UserContainer from "../containers/UserContainer";
import PageContainer from "../containers/PageContainer";
import "../style/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <UserContainer />
        </div>
        <PageContainer />
      </div>
    );
  }
}

export default App;

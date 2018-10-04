import React, { Component } from "react";
import { connect } from "react-redux";
import "../style/App.css";
import { User } from "../components/User";
import { Page } from "../components/Page";
import { getPhotos } from "../actions/PageActions";
import { handleLogin } from "../actions/UserActions";

class App extends Component {
  render() {
    const { user, page, getPhotos, handleLogin } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <User
            name={user.name}
            isFetching={user.isFetching}
            error={user.error}
            handleLogin={handleLogin}
          />
        </header>
        <Page
          photos={page.photos}
          year={page.year}
          loading={page.loading}
          error={page.error}
          getPhotos={getPhotos}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    page: store.page
  };
};

const mapDispatchToPtops = dispatch => {
  return {
    getPhotos: year => dispatch(getPhotos(year)),
    handleLogin: () => dispatch(handleLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPtops
)(App);

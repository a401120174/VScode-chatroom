import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { setToggle, fectcRooms } from "./actions/toggleAction.js";
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={props.onClick}>{props.toggle ? "yes" : "no"}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    toggle: state.toggle,
    rooms: state.rooms
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(fectcRooms());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

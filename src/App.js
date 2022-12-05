import Fotter from "./layout/Fotter";
import Header from "./layout/Header";
import Main from "./layout/Main";
import React, { Component } from "react";
import Preloader from "./components/Preloader";

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Fotter />
      </>
    );
  }
}

export default App;

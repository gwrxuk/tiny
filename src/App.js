import React from 'react';
import logo from './Logo.png';
import { connect } from 'react-redux';

import Checkout from './components/Checkout';





class App extends React.Component {
  render() {

    return (
      <div className="app">
        <img src={logo} alt="logo"></img>
        <Checkout />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMenu: state.selectedMenu,
  };
};

export default connect(mapStateToProps)(App);

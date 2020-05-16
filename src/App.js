import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';

import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import ContactUs from './components/contactus';



class App extends React.Component {
  render() {
    const {
      selectedMenu = '',
    } = this.props;
    let content = <ContactUs />
    return (
      <div className="app">
        <Nav />
        <div className="panel">
          <Header />
          <div className="menu-text"> { selectedMenu }</div>
          <div className="content-wrap">
            { content }
          </div>
        </div> 
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

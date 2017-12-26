import React, { Component } from 'react';
import logo from './../assets/AWS_logo.png'

class Header extends Component {
  render() {
    return (
      <header role="banner">
        <div class="jumbotron">
          <div class="container">
            <img src={logo} class="img-fluid" />
          </div>
        </div>
      </header>
    );
  }
};

export default Header;

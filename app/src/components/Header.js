import React, { Component } from 'react';
import logo from './../assets/AWS_logo.png'

class AWSProduct extends Component {
  render() {
    return (
      <header role="banner">
        <div class="jumbotron">
          <div class="container">
            <img src={logo} class="img-fluid" width="1034" height="377" />
          </div>
        </div>
      </header>
    );
  }
};

export default AWSProduct;

import React, { Component } from 'react';

class AWSProductContainer extends Component {
  render() {
    return (
      <div class="container">
        <h2>Service name</h2>
        <div class="row text-center">
          {this.props.products}
        </div>
        <hr />
      </div>
    );
  }
};

export default AWSProductContainer;

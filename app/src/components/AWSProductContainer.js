import React, { Component } from 'react';

class AWSProductContainer extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          {this.props.products}
        </div>
        <hr />
      </div>
    );
  }
};

export default AWSProductContainer;

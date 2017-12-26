import React, { Component } from 'react';
import Product from './Product'

class AWSProductContainer extends Component {
  render() {
    return (
      <div class="container">
        <h2>{this.props.name}</h2>
        <div class="row text-center">
          {this.props.products.map((product) => (
            <Product category={this.props.name}
              name={typeof product !== 'object' ? product : product.name}
              link={product.link}
              disabled={product.disabled} />
          ))}
        </div>
        <hr />
      </div>
    );
  }
};

export default AWSProductContainer;

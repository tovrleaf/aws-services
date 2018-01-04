import React, { Component } from 'react';
import Product from './Product'
import './ProductContainer.css'

class AWSProductContainer extends Component {
  render() {
    return (
      <div class="container productContainer">
        <h2>{this.props.name}</h2>
        <div class="row text-center">
          {this.props.products.map((product) => (
            <Product category={this.props.name}
              name={typeof product === 'object' ? Object.keys(product)[0] : product}
              link={typeof product === 'object' ? product[Object.keys(product)[0]] : null} />
          ))}
        </div>
        <hr />
      </div>
    );
  }
};

export default AWSProductContainer;

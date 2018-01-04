import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  render() {
    let logo
    try {
      logo = require('./../assets/products/' + this.props.category + '/' + this.props.name + '.png')
    } catch (err) {
      logo = require('./../assets/Error-404Window-icon.png')
    }
    let style = {}
    if (typeof this.props.link !== 'string') {
      style.opacity = 0.25;
    }
    return (
      <div class="col-md-2 product" style={style}>
        <a href={this.props.link}>
          <img src={logo} alt={this.props.name} class="img-fluid" />
          <p>{this.props.name}</p>
        </a>
      </div>
    );
  }
};

export default Product;

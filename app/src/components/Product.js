import React, { Component } from 'react';

class Product extends Component {
  render() {
    let logo
    try {
      logo = require('./../assets/products/' + this.props.category + '/' + this.props.name + '.png')
    } catch (err) {
      logo = require('./../assets/Error-404Window-icon.png')
    }
    let style = {}
    if (typeof this.props.link != 'string' || this.props.disabled) {
      style.opacity = 0.35;
    }
    return (
      <div class="col-md-2" style={style}>
        <img src={logo} class="img-fluid" />
        <h4>{this.props.name}</h4>
        <p><a class="btn btn-secondary" href={this.props.link} role="button">View details &raquo;</a></p>
      </div>
    );
  }
};

export default Product;

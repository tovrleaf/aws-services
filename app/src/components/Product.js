import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div class="col-md-3">
        <h3>Heading</h3>
        <p>Foo Bar Biz</p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div>
    );
  }
};

export default Product;

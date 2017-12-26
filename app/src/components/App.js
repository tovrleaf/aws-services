import React, { Component } from 'react';
import Header from './Header'
import ProductContainer from './ProductContainer'
import Product from './Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          <ProductContainer products={[
            <Product />,
            <Product />,
            <Product />,
            <Product />,
            <Product />
          ]} />
        </main>
      </div>
    );
  }
}

export default App;

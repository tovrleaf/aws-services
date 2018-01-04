import React, { Component } from 'react';
import Header from './Header'
import ProductContainer from './ProductContainer'

var data = require('./services.json');
var rows = [];
for (var serviceName in data) {
  rows.push(<ProductContainer name={serviceName} products={data[serviceName]} />);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          {rows}
        </main>
      </div>
    );
  }
}

export default App;

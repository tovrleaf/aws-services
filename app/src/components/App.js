import React, { Component } from 'react';
import Header from './Header'
import AWSProductContainer from './AWSProductContainer'
import AWSProduct from './AWSProduct'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          <AWSProductContainer products={[
            <AWSProduct />,
            <AWSProduct />,
            <AWSProduct />,
            <AWSProduct />,
            <AWSProduct />
          ]} />
        </main>
      </div>
    );
  }
}

export default App;

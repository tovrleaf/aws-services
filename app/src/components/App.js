import React, { Component } from 'react';
import Header from './Header'
import ProductContainer from './ProductContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          <ProductContainer name="Security, Identity & Compliance" products={[
            {name: "AWS Artifact", link: "https://aws.amazon.com/artifact/", disabled: 1},
            {name: "AWS Certificate Manager", link: "je", disabled: 1},
            "Amazon Cloud Directory",
            "AWS CloudHSM",
            "Amazon Cognito",
            "AWS Directory Service",
            "Amazon GuardDuty",
            {name: "AWS Identity and Access Management (IAM)", link: "https://aws.amazon.com/iam/"},
            "Amazon Inspector",
            "AWS Key Management Service",
            "Amazon Macie",
            "AWS Organizations",
            "AWS Shield",
            "AWS Single Sign-On",
            "AWS WAF"
          ]} />
        </main>
      </div>
    );
  }
}

export default App;

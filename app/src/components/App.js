import React, { Component } from 'react';
import Header from './Header'
import ProductContainer from './ProductContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main role="main">
          <ProductContainer name="Compute" products={[
            "Amazon EC2",
            "Amazon Elastic Container Service",
            "Amazon EKS",
            "Amazon Elastic Container Registry",
            "Amazon Lightsail",
            "AWS Batch",
            "AWS Elastic Beanstalk",
            "AWS Fargate",
            "AWS Lambda",
            "AWS Serverless Application Repository",
            "Auto Scaling",
            "VMware Cloud on AWS"
          ]} />
          <ProductContainer name="Storage" products={[
            {name: "Amazon S3", link: "https://aws.amazon.com/s3/"},
            "Amazon Elastic Block Store",
            "Amazon Elastic File System",
            "Amazon Glacier",
            "AWS Storage Gateway",
            "AWS Snowball",
            "AWS Snowball Edge",
            "AWS Snowmobile"
          ]} />
          <ProductContainer name="Security, Identity & Compliance" products={[
            {name: "AWS Artifact"},
            {name: "AWS Certificate Manager"},
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

import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <p>{'404 NotFoundPage'}</p>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;

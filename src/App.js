import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import Content from './components/Content/Content'

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Content />
        </Layout>
      </div>
    );
  }
}

export default App;

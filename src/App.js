import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import Community from './components/Content/Community'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Switch>
            <Route path="/contacto" component={Community} />
            <Route path="/clases" component={Community} />
            <Route path="/actividades" component={Community} />
            <Route path="/trophy" component={Community} />
            <Route path="/" component={Community} />
          </ Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import Comunidad from './components/Pages/Comunidad/Comunidad'
import Contacto from './components/Pages/Contacto/Contacto'
import Clases from './components/Pages/Clases/Clases'
import Actividades from './components/Pages/Actividades/Actividades'
import Trophy from './components/Pages/Trophy/Trophy'

import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Switch>
            <Route path="/comunidad" component={Comunidad} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/clases" component={Clases} />
            <Route path="/actividades" component={Actividades} />
            <Route path="/trophy" component={Trophy} />
            <Redirect from="/" to="/comunidad" />
          </ Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

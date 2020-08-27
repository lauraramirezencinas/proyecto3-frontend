import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Encabezado from './components/Navbar';
import Login from './auth/Login';
import Busqueda from './components/Busqueda';

class App extends Component {


  render() {
    return (
      <div >
        <Encabezado />
        <Switch>
          <Route exact path="/">
            <Busqueda/>
          </Route>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }

}

export default App;

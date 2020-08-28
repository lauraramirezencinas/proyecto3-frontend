import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Encabezado from './components/Navbar';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Signup from './components/auth/Signup';
import Busqueda from './components/Busqueda';
//import ProtectedRoute from './auth/protected-route.js'
import Profile from './components/Profile';
import FormBaker from './components/auth/FormBaker';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }


  render() {
    return (
      <div >
        <Encabezado user={this.state.loggedInUser} key={this.state.loggedInUser} />
        <Switch>
          <Route exact path="/">
            <Busqueda/>
          </Route>
          <Route exact path="/signup" render={(props) => <Signup {...props} getUser={this.getTheUser} />}/> 
          <Route exact path="/login" render={(props)=> <Login {...props}  getUser={this.getTheUser} /> } />
          <Route exact path="/logout" render={(props) => <Logout {...props} getUser={this.getTheUser} />} />
          <Route exact path="/formbaker" render={ (props)=> <FormBaker getUser={this.getTheUser} /> }/>
          <Route exact path="/profile" render={ (props)=> <Profile getUser={this.getTheUser} /> }/>
        {/* <ProtectedRoute path="/profile" user={this.state.loggedInUser} component={Profile} /> */}
        </Switch>
      </div>
    );
  }

}

export default App;

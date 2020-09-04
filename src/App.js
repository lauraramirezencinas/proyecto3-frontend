import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Encabezado from './components/Navbar';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Signup from './components/auth/Signup';
//import ProtectedRoute from './auth/protected-route.js'
import Profile from './components/Profile';
import FormBaker from './components/auth/FormBaker';
import Home from './components/Home';

class App extends Component {

  constructor(props) {
    super(props);
    const local= JSON.parse(localStorage.getItem('user')) ;
    this.state = { loggedInUser:local };
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
    localStorage.setItem('user', JSON.stringify(userObj));
  }



  

  render() {

    return (
      <div >
        <Encabezado user={this.state.loggedInUser} key={this.state.loggedInUser} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup" render={(props) => <Signup {...props} getUser={this.getTheUser} />} />
          <Route exact path="/login" render={(props) => <Login {...props} getUser={this.getTheUser} />} />
          <Route exact path="/logout" render={(props) => <Logout {...props} getUser={this.getTheUser} />} />
          {/* <ProtectedRoute  path="/formbaker" user={this.state.loggedInUser} render={ (props)=> <FormBaker {...props} getUser={this.getTheUser} /> }/> */}
          {/* <ProtectedRoute path="/profile"  
          user={this.state.loggedInUser} 
          component={Profile}
          render={(props) => <Profile getUser={this.getTheUser} user={this.state.loggedInUser}/>}
          />   */}
          <Route path="/formbaker"  render={(props) => <FormBaker {...props} getUser={this.getTheUser} user={this.state.loggedInUser} />} /> 
          <Route exact path="/profile" render={ (props)=> <Profile {...props} getUser={this.getTheUser} user={this.state.loggedInUser} /> }/>
          
        </Switch>
      </div>
    );
  }

}


export default App;

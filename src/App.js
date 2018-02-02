import React, { Component } from 'react';
import Login from './containers/login';
import Home from './containers/home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

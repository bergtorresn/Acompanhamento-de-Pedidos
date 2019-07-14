import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { Home } from './home/';
import { history } from './helpers';
import { Orders } from './orders/orders.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/orders' component={Orders} />

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
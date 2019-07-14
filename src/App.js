import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './helpers';
import { Orders } from './orders/orders.component';
import { AddOrder } from './orders/addorder.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path='/orders' component={Orders} />
              <Route exact path='/add-order' component={AddOrder} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
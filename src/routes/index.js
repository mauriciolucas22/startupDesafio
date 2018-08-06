import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Login from '../pages/login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/dashboard" component={Home} />
  </Switch>
);

export default Routes;

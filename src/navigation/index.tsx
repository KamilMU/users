import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageNotFound from '../components/PageNotFound';
import UserDetailsContainer from '../containers/UserDetailsContainer';
import Users from '../containers/Users';

export const navigation = (
  <Router>
    <Switch>
      <Route exact path="/" component={Users} />
      <Route path="/user/:id" component={UserDetailsContainer} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
)
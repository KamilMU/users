import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PageNotFound from '../components/PageNotFound';
import UserDetailsContainer from '../containers/UserDetailsContainer';
import Users from '../containers/Users';

export const navigation = (
  <Router>
    <Switch>
      <Route path="/" component={Users} />
      <Route path="/pokemon/:id" component={UserDetailsContainer} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
)
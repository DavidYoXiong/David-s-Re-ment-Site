import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login';

import Dashboard from "./routes/Dashboard";

// <Redirect from="/" to="/login" />

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default RouterConfig;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={() => <div>Start React App</div>} />
    <Route component={() => <div>Page Not Found</div>} />
  </Switch>
);

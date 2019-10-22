import React from 'react';
import { Router, Route, Switch } from 'react-router';

const createBrowserHistory  = require('history').createBrowserHistory;

// route components
import ListPageContainer from '../ui/containers/ListPageContainer.jsx';
import AddPageContainer from '../ui/containers/AddPageContainer.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/add" component={ListPageContainer} />
            <Route exact path="/" component={AddPageContainer} />
        </Switch>
    </Router>
);
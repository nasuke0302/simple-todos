import React from 'react';
import { Router, Route, Switch } from 'react-router';

const createBrowserHistory  = require('history').createBrowserHistory;

// route components
import CategoriesListPage from '../ui/containers/CategoriesListPage.jsx';
import AddTasksPage from '../ui/containers/AddTasksPage.jsx';
import TasksListPage from '../ui/containers/TasksListPage.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={CategoriesListPage} />
            <Route exact path="/add" component={AddTasksPage} />
            <Route exact path="/categories/:id" component={TasksListPage} />
        </Switch>
    </Router>
);
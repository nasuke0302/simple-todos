import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks';
import Task from './components/Task.jsx';

const App = props => {

    const renderTasks = () => {
        return props.tasks.map(task => <Task key={task._id} task={task} />);
    }

    return (
        <div className="container">
            <header>
                <h1>Todo List</h1>
            </header>

            <ul>
                {renderTasks()}
            </ul>
        </div>
    );
}

export default withTracker(() => {
    return {
        tasks: Tasks.find({}).fetch(),
    };
})(App);
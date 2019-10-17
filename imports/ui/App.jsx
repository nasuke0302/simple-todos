import React, { useRef, useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks';
import Task from './components/Task.jsx';
import AccountsUIWrapper from './components/AccountsUIWrapper.jsx';

const App = props => {

    const textInput = useRef('textInput');
    const [hideCompleted, setHideCompleted] = useState(false);

    const renderTasks = () => {
        let filteredTask = props.tasks;
        if (hideCompleted) {
            filteredTask = filteredTask.filter(task => !task.checked);
        }
        return filteredTask.map(task => <Task key={task._id} task={task} />);
    }

    const handleSubmit = e => {
        e.preventDefault();

        Tasks.insert({
            text: textInput.current.value,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
        })

        textInput.current.value = '';
    }

    return (
        <div className="container">
            <header>
                <h1>Todo List {props.incompleteTasks}</h1>
                <label className="hide-completed">
                    <input
                        type='checkbox'
                        readOnly
                        checked={hideCompleted}
                        onClick={() => setHideCompleted(!hideCompleted)}
                    />
                    Hide Completed Task
                </label>

                <AccountsUIWrapper />
                { props.currentUser ?
                    <form className='new-task' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            ref={textInput}
                            placeholder='Type to add new tasks'
                        />
                    </form> : ''
                }
            </header>

            <ul>
                {renderTasks()}
            </ul>
        </div>
    );
}

export default withTracker(() => {
    return {
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
        incompleteTasks: Tasks.find({ checked: { $ne: true } }).count(),
        currentUser: Meteor.user()
    };
})(App);
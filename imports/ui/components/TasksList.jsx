import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../../api/tasks';
import TaskItem from './TaskItem';

const TasksList = ({ category, tasks }) => {
    const renderTasks = () => {
        if (!tasks) return <div>Loading</div>

        return tasks.map(task => {
            return <TaskItem key={task._id} task={task} />
        })
    };

    return (
        <ul className="list">
            {renderTasks()}
        </ul>
    )
}

export default withTracker(({ category }) => {
    Meteor.subscribe('tasks.byCategoryName', category.name);

    return {
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    };
})(TasksList);
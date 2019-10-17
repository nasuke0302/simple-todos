import React from 'react'
import { Tasks } from '../../api/tasks';

export default props => {
    
    const taskClassName = props.task.checked ? 'checked' : '';
    
    const deleteThisTask = () => {
        Tasks.remove({ _id: props.task._id })
    }
    
    const toggleChecked = () => {
        Tasks.update({ _id: props.task._id }, { $set: { checked: !props.task.checked } });
    }

    return (
        <li className={taskClassName} >
            <button
                className="delete"
                onClick={deleteThisTask}
            >
                &times;
            </button>

            <input
                type="checkbox"
                readOnly
                checked={props.task.checked}
                onClick={toggleChecked}
            />
            <span><strong>{props.task.username}</strong> {props.task.text}</span>
        </li >
    )
}
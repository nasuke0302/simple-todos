import React from 'react'
import styled, { css } from 'styled-components';


export default ({ task }) => {
    const formatDate = date => date.toLocaleDateString();

    const handleCheckTask = () => {
        Meteor.call('tasks.setChecked', task._id, task.checked);
    }

    return (
        <Task checked={task.checked}>
            <div>
                <p>{task.text}</p>
                <span>{task.date}</span>
            </div>
            <Checkbox checked={task.checked} onClick={handleCheckTask} />
        </Task>
    );
};

const Task = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 2em;
    >div {
        width: 60%;
        ${props => props.checked && css`
            text-decoration: line-through;
            color: gray !important;
        `};
        p {
            margin: 0;
        }
        span {
            color: gray;
        }
    }
`;

const Checkbox = styled.div`
    width: 1em !important;
    height: 1em;
    background: ${props => props.checked ? '#41b4aa' : 'transparent'};
    border: 2px solid #41b4aa;
    border-radius: 5px;
`;
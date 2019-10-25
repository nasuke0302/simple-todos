import React from 'react'

import { withTracker } from 'meteor/react-meteor-data';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Categories } from '../../api/categories'

import CategoryItem from '../components/CategoryItem'
import TasksList from '../components/TasksList';
import AddTaskButton from '../components/AddTaskButton';

const TasksListPage = props => {
    const history = useHistory();

    const handleBack = () => history.push('/');

    return (
        <div className='tasks-page-wrapper'>
            <div className="upper-section">
                <div className="header">
                    <span onClick={handleBack}><FontAwesomeIcon icon='angle-left' size='2x' /> </span>
                </div>
                {props.category && <CategoryItem category={props.category} />}
            </div>
            <div className="lower-section">
                {props.category && <TasksList category={props.category} />}
            </div>
            <AddTaskButton />
        </div>
    );
}

export default withTracker(props => {
    Meteor.subscribe('categories.byId', props.match.params.id);
    return {
        category: Categories.findOne()
    }
})(TasksListPage);

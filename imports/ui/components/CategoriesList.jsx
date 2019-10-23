import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

import { Categories } from '../../api/categories'
import { capitalize } from '../../startup/helpers'

const CategoriesList = props => {
    return (
        <ul className="categories-wrapper">
            {props.categories.map(cat => {
                return (
                    <li className='category' key={cat._id}>
                        <div><FontAwesomeIcon icon={faBell} size='2x' /></div>
                        <h3>{capitalize(cat.name)}</h3>
                        <p>{cat.taskCount} Tasks</p>
                    </li>
                )
            })}
        </ul>
    );
};

export default withTracker(() => {
    Meteor.subscribe('categories.all');
    return {
        categories: Categories.find().fetch()
    }
})(CategoriesList);
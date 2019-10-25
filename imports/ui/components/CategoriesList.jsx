import React from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import { useHistory } from 'react-router';
import { Categories } from '../../api/categories'
import CategoryItem from '../components/CategoryItem'

const CategoriesList = props => {
    const history = useHistory();

    const handleClick = event => {
        history.push(`/categories/${event.currentTarget.id}`);
    }

    return (
        <ul className="categories-wrapper">
            {props.categories.map(cat => {
                return (
                    <li className='category' key={cat._id} id={cat._id} onClick={handleClick}>
                        <CategoryItem category={cat} light />
                    </li>
                )
            })}
        </ul>
    );
}

export default withTracker(() => {
    Meteor.subscribe('categories.all');
    return {
        categories: Categories.find().fetch()
    }
})(CategoriesList);
import React from 'react'

import CategoriesList from '../components/CategoriesList'
import AddTaskButton from '../components/AddTaskButton'

export default props => {
    return (
        <div className='page-wrapper'>
            <CategoriesList />
            <AddTaskButton />
        </div>
    );
};
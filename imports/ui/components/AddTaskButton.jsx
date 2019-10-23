import React from 'react';
import { useHistory } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default () => {
    const history = useHistory();
    
    const handleClick = () => {
        history.push('/add');
    }

    return (
        <button
            className='add-task-btn'
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={faPlus} size='2x' />
        </button>
    )
}
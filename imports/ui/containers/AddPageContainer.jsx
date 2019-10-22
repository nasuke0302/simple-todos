import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faTag } from '@fortawesome/free-solid-svg-icons'

export default props => {
    return (
        <div className='page-wrapper'>
            <div className='header-wrapper'>
                <h1>New Task</h1>
                <span>&times;</span>
            </div>
            <div className="body-wrapper">
                <form className='add-task-form'>
                    <label htmlFor="text">What are you planning?</label>
                    <textarea name='text' rows='8' />
                    <div className="inputs-wrapper">
                        <div className='inline-input'>
                            <FontAwesomeIcon icon={faBell} />
                            <input type="datetime" name="date" id="date" />
                        </div>
                        <div className='inline-input'>
                            <FontAwesomeIcon icon={faTag} />
                            <input type="text" name="category" id="category" />
                        </div>
                    </div>
                    <div className="submit-btn">
                        <button type="submit">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
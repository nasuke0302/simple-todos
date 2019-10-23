import React, { useRef } from 'react'
import { useHistory } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faTag } from '@fortawesome/free-solid-svg-icons'

export default props => {
    const text = useRef('text');
    const date = useRef('date');
    const category = useRef('category');

    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();

        const task = {
            text: text.current.value,
            date: date.current.value,
            category: category.current.value
        }
        Meteor.call('tasks.insert', task, (err, res) => {
            if (!err) console.log('success') //history.push('/');
            else console.log(err)
        })
    }

    return (
        <div className='page-wrapper'>
            <div className='header-wrapper'>
                <h1>New Task</h1>
                <span>&times;</span>
            </div>
            <div className="body-wrapper">
                <form className='add-task-form' onSubmit={handleSubmit}>
                    <label htmlFor="text">What are you planning?</label>
                    <textarea name='text' rows='8' ref={text} />
                    <div className="inputs-wrapper">
                        <div className='inline-input'>
                            <FontAwesomeIcon icon={faBell} />
                            <input type="datetime" ref={date} />
                        </div>
                        <div className='inline-input'>
                            <FontAwesomeIcon icon={faTag} />
                            <input type="text" ref={category} />
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
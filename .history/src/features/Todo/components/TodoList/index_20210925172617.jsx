import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './style.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onclickTodo: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList(props) {
    const {todoList, onclickTodo} = props;

    const handleClick = () => {
        onclickTodo
    }

    return (
        
        <ul className='todoList'>
            {todoList.map(todo => (
                <li
                onClick={handleClick}
                className={classnames({
                    completed: todo.status === 'completed'
                })} 
                key={todo.id}>{todo.title}
                
            
                </li>
            ))}
        </ul>     
    );
}

export default TodoList;
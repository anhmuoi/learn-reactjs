import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList(props) {
    const {todoList} = props;
    return (
        
        <ul>
            {todoList.map(todo => (
                <li className={classnames({
                    com
                })} 
                key={todo.id}>{todo.title}</li>
            ))}
        </ul>     
    );
}

export default TodoList;
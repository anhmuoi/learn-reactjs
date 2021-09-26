import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array,
};

TodoList.defaultProps = {
    todoList: [],
}

function TodoList(props) {
    const {todoList} = props;
    return (
        <div>
            <ul>
            
                {todoList.map(todo => (
                    <li></li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
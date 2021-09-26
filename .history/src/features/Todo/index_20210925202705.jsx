import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NoteFound from '../../components/NotFound';
import TodoList from './components/TodoList/index.jsx';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

    const initTodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'code',
            status: 'new',
        },
    ]



    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList)

    const handleOnclickTodo = (todo) => {
        const newTodoList = [...todoList];
        newTodoList[todo.id - 1] = {
            ...newTodoList[todo.id - 1],
            status: todo.status === 'new' ? 'completed' : 'new', 
        }
        setTodoList(newTodoList);
    } 

    return (
        <div>
        <h3>todo list</h3>
        <TodoList todoList={todoList} onclickTodo={handleOnclickTodo}/>
        <div>
            <button style={width:}>All</button>
            <button>Completed</button>
            <button>New</button>
        </div>

        <Switch>
            <Route path={match.path} component={ListPage} exact></Route>
            <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>
            <Route component={NoteFound}></Route>
        </Switch>
            
        </div>
    );
}

export default TodoFeature;
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NoteFound from '../../components/NotFound';
import TodoList from './components/TodoList/index.jsx';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

    const todoList = [
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

    const [todoList,] = useState(todoList)

    return (
        <div>
        <h3>todo list</h3>
        <TodoList todoList={todoList}/>

        <Switch>
            <Route path={match.path} component={ListPage} exact></Route>
            <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>
            <Route component={NoteFound}></Route>
        </Switch>
            
        </div>
    );
}

export default TodoFeature;
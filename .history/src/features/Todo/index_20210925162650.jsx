import React from 'react';
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
            thumbnail: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/9/25/photo1632559276814-16325592772331483367955.jpg'
        },
        {
            id: 2,
            title: 'sleep',
            thumbnail: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/9/25/photo1632553454370-16325534545741505395969.jpg'
        },
        {
            id: 3,
            title: 'code',
            thumbnail: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/9/25/photo1632544865304-1632544865805640839521.jpg'
        },
    ]


    const match = useRouteMatch();
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
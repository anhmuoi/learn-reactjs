
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NoteFound from '../../components/NotFound';
import TodoList from './components/TodoList/index.jsx';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

   



    const match = useRouteMatch();

   
    return (
        <div>
        <Switch>
            <Route path={match.path} component={ListPage} exact></Route>
            <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>
            <Route component={NoteFound}></Route>
        </Switch>
            
        </div>
    );
}

export default TodoFeature;
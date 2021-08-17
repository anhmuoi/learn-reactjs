import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NoteFound from 'components/NotFound/index.js';
import ListPage from './pages/ListPage.jsx';
import { Box } from '@material-ui/core';
import DetailPage from './pages/DetailPage.jsx';

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {

    const match = useRouteMatch();

    return (
        <Box pt={4}>
           <Switch>
            <Route path={match.path} component={ListPage} exact></Route>
             <Route path={`${match.path}/:productID`} component={DetailPage} ></Route> 
            <Route component={NoteFound}></Route>
        </Switch>
        </Box>
    );
}

export default ProductFeature;
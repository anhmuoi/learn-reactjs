import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, LinearProgress } from '@material-ui/core';
import ProductThumbnail from '../components/ProductThumbnail.jsx';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import useProductDetail from '../hooks/useProductDetail.js';
import ProductInfo from '../components/ProductInfo.jsx';
import AddToCartForm from '../components/AddToCartForm.jsx';
import ProductMenu from '../components/ProductMenu.jsx';
import ProductDescription from '../components/ProductDescription.jsx';
import ProductAdditional from '../components/ProductAdditional.jsx';
import ProductReviews from '../components/ProductReviews.jsx';
import { useDispatch } from 'react-redux';
import { addFromCart } from 'features/Cart/cartSlice.js';



DetailPage.propTypes = {
    
};
const useStyle = makeStyles(theme => ({
    root: {
        paddingBottom: theme.spacing(3),
    },
    left: {
        width: '400',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
        
    },
    loading: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%'
    }
}))
function DetailPage(props) {
    const classes = useStyle();
    const dispatch = useDispatch();

    const {params:{productID}, url} = useRouteMatch();
 
    const {product, loading} = useProductDetail(productID);
    if(loading)
    {
        return (
            <Box className={classes.loading}>
                <LinearProgress />
            </Box>
        )
    }

    const handleAddToCartSubmit  = (formValue) => {
      
        const action = addFromCart({
            id: product.id,
            product,
            quantity: formValue.quantity,
        })
        console.log(action);
        dispatch(action);
    }

    return (
       <Box className={classes.root}>
           <Container>
               <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                         
                            <ProductThumbnail product={product}></ProductThumbnail>
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product}></ProductInfo>
                            <AddToCartForm onSubmit={handleAddToCartSubmit}></AddToCartForm>
                        </Grid>

                    </Grid>
               </Paper>
           </Container>

           <ProductMenu></ProductMenu>
                <Switch>
                    <Route exact path={url}>
                        <ProductDescription product={product}></ProductDescription>
                    </Route>
                    <Route  path={`${url}/additional`} component={ProductAdditional}></Route>
                    <Route  path={`${url}/reviews`} component={ProductReviews}></Route>
                </Switch>
       </Box>

    );
}

export default DetailPage;
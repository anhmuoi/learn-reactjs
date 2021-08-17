import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import productApi from 'api/productApi.js';
import ProductSkeletonList from '../components/ProductSkeletonList.jsx';
import ProductList from '../components/ProductList.jsx';

ListPage.propTypes = {
    
};


const useStyle = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 0'
    },
}))

function ListPage(props) {
    const classes = useStyle();

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(()=>{
        (async () =>{

            try {
                
                const {data} = await productApi.getAll({_page: 1,_limit: 10});
                setProductList(data);
                
            } catch (error) {
                console.log('error fetch product list',error);
                
            }
            setLoading(false);
        })();
    },[]);




    return (
        <Box>
        <Container>

            <Grid container>
                <Grid item className={classes.left}>
                    
                    <Paper elevation={0}>left</Paper>
                </Grid>
                <Grid item className={classes.right}>
                    
                    <Paper elevation={0}>
                        {loading ?  <ProductSkeletonList></ProductSkeletonList> : <ProductList data={productList}></ProductList>}
                    </Paper>
                </Grid>
            </Grid>

        </Container>

        </Box>
    );
}

export default ListPage;
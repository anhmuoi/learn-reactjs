import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

ProductSkeletonList.propTypes = {
    length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
    length: 6,
}

function ProductSkeletonList(props) {

    const {length} = props

    return (
       <Box>
            <Grid container>
                {Array.from(new Array(length)).map((values, key)=>(
                    <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
                        <Box padding={1} >
                            <Skeleton variant='rect' width='100%' height={215}></Skeleton>
                            <Skeleton></Skeleton>
                            <Skeleton width='60%'></Skeleton>
                        </Box>
                    </Grid>
                ))

                }
            </Grid>
       </Box>
    );
}

export default ProductSkeletonList;
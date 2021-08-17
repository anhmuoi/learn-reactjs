import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail(props) {
    const {product} = props;
    return (
        <Box>

        </Box>
    );
}

export default ProductThumbnail;
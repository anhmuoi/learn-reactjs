import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/commons.js';

ProductThumbnail.propTypes = {
    product: PropTypes.object,
};

function ProductThumbnail({ product }) {
    

    const imageUrl = product.thumbnail
    ? STATIC_HOST + product.thumbnail.url
    : THUMBNAIL_PLACEHOLDER;

    return (
        <Box>
            <img src={imageUrl} alt={product.name}></img>
        </Box>
    );
}

export default ProductThumbnail;
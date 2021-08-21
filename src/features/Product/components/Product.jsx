import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants/commons.js";

Product.propTypes = {
  product: PropTypes.object,
};

function Product(props) {
  const { product } = props;

  const imageUrl = product.thumbnail
    ? STATIC_HOST + product.thumbnail.url
    : THUMBNAIL_PLACEHOLDER;

  return (
    <Box padding={1}>
      <Box padding={1} minHeight='215px'>
        <img width="100%" src={imageUrl} alt={product.name}></img>
      </Box>
      <Typography>{product.name}</Typography>
      <Typography>
        <Box component="span" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
        </Box>

        {product.promotionPercent > 0
          ? `    -${product.promotionPercent}%`
          : ""}
      </Typography>
    </Box>
  );
}

export default Product;

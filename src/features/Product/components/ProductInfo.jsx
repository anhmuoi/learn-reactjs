import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { formatPrice } from "utils";

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyle = makeStyles((theme) => ({
  root: {
      paddingBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  description: {
    margin: theme.spacing(2, 0),
  },
  priceBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  salePrice: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h4.fontSize,
    fontWeight: "bold",
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: "line-through",
  },
  promotionPercent: {},
}));

function ProductInfo({ product = {} }) {
  const classes = useStyle();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;

  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        <Box className={classes.salePrice} component="span">
          {formatPrice(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box className={classes.originalPrice} component="span">
              {formatPrice(originalPrice)}
            </Box>
            <Box className={classes.promotionPercent} component="span">
              -{promotionPercent}%
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;

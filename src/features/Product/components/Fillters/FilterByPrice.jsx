import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { set } from "react-hook-form";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  
  const [priceList, setPriceList] = useState({
    salePrice_lte: 0,
    salePrice_gte : 0,
});


  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceList((prev) =>({
      ...prev,
      [name]: value,
    }));
  };
  const handleApply = () => {
    
    if (onChange) {
      onChange(priceList);
    }
    setPriceList({
        salePrice_lte: 0,
        salePrice_gte : 0,
    })
  };

  return (
    <Box>
      <Typography>Giá</Typography>
      <Box>


      <TextField
        onChange={handlePriceChange}
        label='từ'
        name="salePrice_gte"
        value={priceList.salePrice_gte ? priceList.salePrice_gte : 0}
        
      ></TextField>
     
      <TextField
        onChange={handlePriceChange}
        label='đến'
        name="salePrice_lte"
        value={priceList.salePrice_lte ? priceList.salePrice_lte : 0}
      ></TextField>
      
      </Box>
      <Button variant='outlined' onClick={handleApply}> Áp dụng</Button>
    </Box>
  );
}

export default FilterByPrice;

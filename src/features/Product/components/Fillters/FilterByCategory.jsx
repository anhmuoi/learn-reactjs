import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import categoryApi from "api/categoryApi.js";

FilterByCategory.propTypes = {};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await categoryApi.getAll();
        setCategoryList(
          res.map(x => ({
            id: x.id,
            name: x.name
          }))
          );
      } catch (error) {
        console.log("fail to fetch category list", error);
      }
    })();
  }, []);

  const handleCategoryChange  = (categoryId) => {

    if(onChange)
    {
      onChange(categoryId);
    }


  }

  return (
    <Box>
      <Typography>Danh mục sản phẩm </Typography>
      <ul>
    
        {categoryList.map((category) => (
          <li onClick={() =>handleCategoryChange(category.id)} key={category.id}>{category.name}</li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;

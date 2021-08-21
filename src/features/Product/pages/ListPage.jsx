import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import productApi from "api/productApi.js";
import ProductSkeletonList from "../components/ProductSkeletonList.jsx";
import ProductList from "../components/ProductList.jsx";
import { Pagination } from "@material-ui/lab";
import ProductSort from "../components/ProductSort.jsx";
import ProductFilter from "../components/ProductFilter.jsx";
import FilterViewer from "../components/Fillters/FilterViewer.jsx";
import { useHistory, useLocation } from "react-router-dom";
import queryString from 'query-string'

ListPage.propTypes = {};

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: "250px",
  },
  right: {
    flex: "1 1 0",
  },
  pagination: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    padding: theme.spacing(1),
  },
}));

function ListPage(props) {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params =  queryString.parse(location.search);

    return {
      ...params,
    _page: Number.parseInt(params._page) || 1,
    _limit: Number.parseInt(params._limit) || 12,
    _sort: params._sort || "salePrice:ASC",
    isFreeShip: params.isFreeShip === 'true',
    isPromotion: params.isPromotion === 'true',
    }

  },[location.search]);
 

  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 10,
  });
  const [loading, setLoading] = useState(true);

  // const [filter, setFilter] = useState(()=>({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 12,
  //   _sort: queryParams._sort || "salePrice:ASC",
  // }));


  // useEffect(() => {
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filter),
  //   })

  // },[history ,filter]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("error fetch product list", error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handlePagination = (event, page) => {
    // setFilter((prevFilter) => ({
    //   ...prevFilter,
    //   _page: page,
    // }));

    const filter = {
      ...queryParams,
      _page: page,
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    })


  };
  const handleSortChange = (newSortValue) => {
    setLoading(true);
    // setFilter((prevFilter) => ({
    //   ...prevFilter,
    //   _sort: newSortValue,
    // }));

    const filter = {
      ...queryParams,
      _sort: newSortValue,
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    })



  };
  const handleFilterChange = (newFilter) => {
    setLoading(true);
    // setFilter((prevFilter) => ({
    //   ...prevFilter,
    //   ...newFilter,
    // }));

    const filter = {
      ...queryParams,
      ...newFilter,
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    })

  };

  const setNewFilter = (newFilter) => {
    // setFilter(newFilter);


    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilter),
    })    

  };

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilter
                filter={queryParams}
                onChange={handleFilterChange}
              ></ProductFilter>
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                onChange={handleSortChange}
                currentSort={queryParams._sort}
              ></ProductSort>
              <FilterViewer
                filter={queryParams}
                onChange={setNewFilter}
              ></FilterViewer>
              {loading ? (
                <ProductSkeletonList length={12}></ProductSkeletonList>
              ) : (
                <ProductList data={productList}></ProductList>
              )}
              <Box className={classes.pagination}>
                <Pagination
                  onChange={handlePagination}
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  color="primary"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;

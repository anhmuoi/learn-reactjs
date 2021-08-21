import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Box, Chip, makeStyles } from "@material-ui/core";

FilterViewer.propTypes = {
  filter: PropTypes.object,
  onChange: PropTypes.func,
};

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",

    padding: 0,
    margin: theme.spacing(2, 0),
    listStyleType: "none",
    "& > li": {
      margin: "0",
      padding: theme.spacing(1),
    },
  },
}));

const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "vận chuyển miễn phí",
    isActive: (filter) => filter.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filter) => {
      const newFilter = { ...filter };
      if (newFilter.isFreeShip) {
        delete newFilter.isFreeShip;
      } else {
        newFilter.isFreeShip = true;
      }
      return newFilter;
    },
  },
  {
    id: 2,
    getLabel: () => "có khuyến mãi",
    isActive: () => true,
    isVisible: (filter) => {
      if (filter.isPromotion && filter.isPromotion === true) {
        return true;
      } else return false;
    },
    isRemovable: true,
    onRemove: (filter) => {
      const newFilter = { ...filter };
      if (newFilter.isPromotion) {
        delete newFilter.isPromotion;
      }

      return newFilter;
    },
    onToggle: () => false,
  },
  {
    id: 3,
    getLabel: (filter) =>
      `khoảng giá:  ${new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(filter.salePrice_gte)} - ${new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(filter.salePrice_lte)}`,
    isActive: () => true,
    isVisible: (filter) => {
      if (filter.salePrice_gte || filter.salePrice_lte) {
        return true;
      } else {
        return false;
      }
    },
    isRemovable: true,
    onRemove: (filter) => {
      const newFilter = { ...filter };
      if (newFilter.salePrice_lte && newFilter.salePrice_gte) {
        delete newFilter.salePrice_lte;
        delete newFilter.salePrice_gte;
      }

      return newFilter;
    },
    onToggle: () => false,
  },
//   {
//     id: 4,
//     getLabel: (filter) => "",
//     isActive: (filter) => true,
//     isVisible: (filter) => true,
//     isRemovable: true,
//     onRemove: (filter) => {},
//     onToggle: (filter) => {},
//   },
];

function FilterViewer({ filter = {}, onChange = null }) {
  const classes = useStyle();

  const visibleFilter = useMemo(() => {
   return FILTER_LIST.filter((x) => x.isVisible(filter))
  }, [filter])

  return (
    <Box component="ul" className={classes.root}>
      {visibleFilter.map((x) => (
        <li key={x.id}>
          <Chip
            label={x.getLabel(filter)}
            color={x.isActive(filter) ? "primary" : "default"}
            clickable={!x.isRemovable}
            onClick={
              x.isRemovable
                ? null
                : () => {
                    if (!onChange) return;
                    onChange(x.onToggle(filter));
                  }
            }
            onDelete={
              x.isRemovable
                ? () => {
                    if (!onChange) return;
                    onChange(x.onRemove(filter));
                  }
                : null
            }
          ></Chip>
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;

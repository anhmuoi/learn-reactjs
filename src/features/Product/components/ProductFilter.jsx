import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Fillters/FilterByCategory.jsx';
import FilterByPrice from './Fillters/FilterByPrice.jsx';

import FilterCheckBox from './Fillters/FilterCheckBox.jsx';

ProductFilter.propTypes = {
    filter: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilter({ filter, onChange}) {

    const handleCategoryChange  = (newCategory) => {
        if(!onChange) return;

        const newFilter = {
            ...filter,
            "category.id": newCategory,
        }
        onChange(newFilter);
    }
    const handlePriceChange  = (newPrice) => {
         if(!onChange) return;

         const newFilter = {
            ...filter,
            'salePrice_gte': newPrice.salePrice_gte,
            'salePrice_lte': newPrice.salePrice_lte,
        }
         onChange(newFilter);
        console.log(newPrice);
    }

    const handleCheckBoxChange  = (checkBoxValues) => {
        if(!onChange) return;
     
        const newFilter = {
            ...filter,
            ...checkBoxValues,
        }
        console.log(newFilter);
        
        onChange(newFilter);
    }

    return (
        <>
        <FilterByCategory onChange={handleCategoryChange} />

        <FilterByPrice onChange={handlePriceChange}/>
        <FilterCheckBox filter={filter} onChange={handleCheckBoxChange} />
        </>
    );
}

export default ProductFilter;
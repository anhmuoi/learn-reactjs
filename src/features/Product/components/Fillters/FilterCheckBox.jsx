import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

FilterCheckBox.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.object,
};

function FilterCheckBox({ filter, onChange }) {

  const handleCheckedChange = (event) => {
    const { name, checked } = event.target;
    if (!onChange) return;
    onChange({ [name]: checked });
  };

  return (
    <Box>
      <Typography>Dịch vụ</Typography>
      <FormControl component="fieldset">
        {[
          { value: "isFreeShip", label: "vận chuyển miễn phí" },
          { value: "isPromotion", label: "có khuyến mãi" },
        ].map((service) => (
          <FormControlLabel
            key={service.value}
            value="end"
            control={
              <Checkbox
                name={service.value}
                checked={Boolean(filter[service.value])}
                onChange={handleCheckedChange}
                color="primary"
              />
            }
            label={service.label}
            labelPlacement="end"
          />
        ))}
      </FormControl>
    </Box>
  );
}

export default FilterCheckBox;

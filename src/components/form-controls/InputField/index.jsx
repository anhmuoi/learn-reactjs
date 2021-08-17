import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled} = props;
  const { formState } = form;

  const hasError = !!(formState.errors[name]);


  return (
    <Controller
      name={name}
      control={form.control}
      disabled={disabled}
      render={({ field }) => (
        
        <TextField
          {...field}

          
          fullWidth
         
          label={label}
          margin='normal'
          variant="outlined"
          error={hasError}
          helperText={formState.errors[name]?.message}
          
        />
        
      )}
    />
  );
}

export default InputField;

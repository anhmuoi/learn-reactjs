import React from "react";
import PropTypes from "prop-types";
import { Box, Button, makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "components/form-controls/InputField/index.jsx";
import QuantityField from "components/form-controls/QuantityField/index.js";
AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

const 
const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: "0 auto",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    textAlign: "center",
  },
}));

function AddToCartForm({ onSubmit = null }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, "minimum value is 1")
      .required("Please enter quantity")
      .typeError("Please enter a number"),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    await onSubmit(values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField form={form} name="quantity" label="Quantity" />

      <Button
        size="large"
        type="submit"
        className={classes.submit}
        style={{width: '300px'}}
        variant="contained"
        color="primary"
      >
        Buy
      </Button>
    </form>
  );
}

export default AddToCartForm;

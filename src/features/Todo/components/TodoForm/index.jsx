import { yupResolver } from '@hookform/resolvers/yup';
import InputField from "components/form-controls/InputField/index.jsx";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";




TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const {onSubmit} = props;
  
  const schema = yup.object().shape({
      title: yup.string().required("Please enter title"),
  });
  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema)
  });

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      todo form
      <InputField form={form} name="title" label="todo" />
    </form>
  );
}

export default TodoForm;

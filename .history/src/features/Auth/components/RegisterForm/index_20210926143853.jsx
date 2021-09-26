import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputField from "components/form-controls/InputField/index.jsx";
import PasswordField from 'components/form-controls/PasswordField/index.js';
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";



RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};


const useStyles = makeStyles((theme) => ({

    avatar: {
      backgroundColor: theme.palette.secondary.main,
      margin: '0 auto'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    title: {
        textAlign: 'center'
    },
    
    
  }));
  

function RegisterForm(props) {
  const {onSubmit} = props;
  
  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter your full name")
    .test('least two word','Please enter at least two word',(values)=>{
        return values.split(" ").length >= 2;
    }),

    email: yup.string().required("Please enter your email")
    .email("Please enter invalid email"),

    password: yup.string().required("Please enter your password")
    .min(6,"Please enter at lease 6 characters"),

    retypePassword: yup.string().required("Please enter retype-password")
    .oneOf([yup.ref('password')],"Password does not match"),
    //oneOf nghĩa là giá trị của retype phải là 1 trong những giá trị chứa trong mảng này
    // ref là để lấy giá trị của  các field nào đó
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      email:"",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema)
  });

  
  

  const handleSubmit = async (values) => {
    await onSubmit(values) ;
   

  };
  
  const classes = useStyles();
 
  const {formState} = form;

  return (


    <div>
      {formState.isSubmitting && <LinearProgress/>}

     <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.title} component="h1" variant="h5">
          Create An Account
        </Typography>

    <form onSubmit={form.handleSubmit(handleSubmit)}>
    
      <InputField form={form} name="fullName" label="Full Name" />
      <InputField form={form} name="email" label="Email" />
      <PasswordField  form={form} name="password" label="Password" />
      <PasswordField  form={form} name="retypePassword" label="Retype Password"/>


      <Button size='large' type="submit" className={classes.submit} fullWidth variant='contained' color="primary">Create An Account</Button>
    </form>



    </div>
  );
}

export default RegisterForm;
